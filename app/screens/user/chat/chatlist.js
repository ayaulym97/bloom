import React from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import {
    RkStyleSheet,
    RkText,
    RkTextInput
} from 'react-native-ui-kitten';
import {Avatar} from '../../../components';

import {StackNavigator, NavigationActions } from 'react-navigation';


export class ChatList extends React.Component {
    static navigationOptions = {
        title: 'Chats List'.toUpperCase()
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
        }
    }

    _renderItem(data) {
        let name = `Temirlan Kudabayev`;
        let last = 'Hey, how we you been?';
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat')}

            >
                <View style={styles.container}>
                    <Avatar rkType='circle' style={styles.avatar} img={require('../../../assets/icons/services/body-relax_gold.png')}/>
                    <View style={styles.content}>
                        <View style={styles.contentHeader}>
                            <RkText rkType='header5'>{name}</RkText>
                            <RkText rkType='secondary4 hintColor'>
                            </RkText>
                        </View>
                        <RkText numberOfLines={2} rkType='primary3 mediumLine'>{last}</RkText>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        console.log('data');
        return (
            <FlatList
                style={styles.root}
                data={this.state.data}
                ItemSeparatorComponent={this._renderSeparator}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem.bind(this)}/>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base
    },
    searchContainer: {
        backgroundColor: theme.colors.screen.bold,
        paddingHorizontal: 16,
        paddingVertical: 10,
        height: 60,
        alignItems: 'center'
    },
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row'
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: theme.colors.border.base
    }
}));