import React from 'react';
import {
    FlatList,
    View,
    Platform,
    Image,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import {InteractionManager} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';
import _ from 'lodash';
import realm from '../../../data/realm';
import {FontAwesome} from '../../../assets/icons';
import {Avatar} from '../../../components/avatar';


export class Chat extends React.Component {

    static navigationOptions = ({navigation}) => {
        let renderAvatar = (user) => {
            return (
                <TouchableOpacity>
                    <Avatar style={styles.avatar} rkType='small' img={require('../../../assets/icons/services/body-relax_gold.png')}/>
                </TouchableOpacity>
            );
        };

        let renderTitle = (user) => {
            return (
                <TouchableOpacity>
                    <View style={styles.header}>
                        <RkText rkType='header5'>Temirlan Kudabayev</RkText>
                        <RkText rkType='secondary3 secondaryColor'>Online</RkText>
                    </View>
                </TouchableOpacity>
            );
        };


        let user = [{
            id: 0,
            namefirst: 'Temirlan',
            surname: 'Kudabayev',
            messages: 'Hey, how’ve you been?',
            photo: require('../../../assets/icons/services/body-relax_gold.png'),
        }]
        let rightButton = renderAvatar(user);
        let title = renderTitle(user);
        return (
            {
                headerTitle: title,
                headerRight: rightButton
            });
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 0,
                namefirst: 'Temirlan',
                surname: 'Kudabayev',
                messages: 'Hey, how’ve you been?',
                photo: require('../../../assets/icons/services/body-relax_gold.png'),
            }]
        };
    }

    // componentDidMount() {
    //     InteractionManager.runAfterInteractions(() => {
    //         this.refs.list.scrollToEnd();
    //     });
    // }

    _keyExtractor(post, index) {
        return post.id;
    }

    _renderItem(info) {
        let inMessage = info.item.type === 'in';
        let backgroundColor = inMessage
            ? RkTheme.current.colors.chat.messageInBackground
            : RkTheme.current.colors.chat.messageOutBackground;
        let itemStyle = inMessage ? styles.itemIn : styles.itemOut;

        let renderDate = (date) => (
            <RkText style={styles.time} rkType='secondary7 hintColor'>

            </RkText>);

        return (
            <View style={[styles.item, itemStyle]}>
                {!inMessage && renderDate(info.item.date)}
                <View style={[styles.balloon, {backgroundColor}]}>
                    <RkText rkType='primary2 mediumLine chat'>{info.item.text}</RkText>
                </View>
                {inMessage && renderDate(info.item.date)}
            </View>
        )
    }

    _scroll() {
        if (Platform.OS === 'ios') {
            this.refs.list.scrollToEnd();
        } else {
            _.delay(() => this.refs.list.scrollToEnd(), 100);
        }
    }

    _pushMessage() {
        if (!this.state.data.messages)
            return;
        let msg = {
            id: this.state.data.messages.length,
            time: 0,
            type: 'out',
            text: this.state.data.messages
        };


        let data = this.state.data;
        realm.write(() => {
            data.messages.push(msg);
        });

        this.setState({
            data,
            message: ''
        });
        this._scroll(true);
    }


    render() {
        return (
            <RkAvoidKeyboard style={styles.container}>
                <FlatList ref='list'
                          style={styles.list}
                          keyExtractor={this._keyExtractor.bind(this)}
                          renderItem={this._renderItem.bind(this)}
                />
                <View style={styles.footer}>
                    <RkButton style={styles.plus} rkType='clear'>
                        <RkText rkType='awesome secondaryColor'>{FontAwesome.plus}</RkText>
                    </RkButton>

                    <RkTextInput
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.data.message}
                        rkType='row sticker'
                        placeholder="Add a comment..."/>

                    <RkButton onPress={() => this._pushMessage()} style={styles.send} rkType='circle highlight'>
                        <Image source={require('../../../assets/icons/call.png')}/>
                    </RkButton>
                </View>
            </RkAvoidKeyboard>

        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    header: {
        alignItems: 'center'
    },
    avatar: {
        marginRight: 16,
    },
    container: {
        flex: 1,
        backgroundColor: theme.colors.screen.base
    },
    list: {
        paddingHorizontal: 17
    },
    footer: {
        flexDirection: 'row',
        minHeight: 60,
        padding: 10,
        backgroundColor: theme.colors.screen.alter
    },
    item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row'
    },
    itemIn: {},
    itemOut: {
        alignSelf: 'flex-end'
    },
    balloon: {
        maxWidth: 250,
        padding: 15,
        borderRadius: 20,
    },
    time: {
        alignSelf: 'flex-end',
        margin: 15
    },
    plus: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginRight: 7
    },
    send: {
        width: 40,
        height: 40,
        marginLeft: 10,
    }
}));