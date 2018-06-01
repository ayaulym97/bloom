import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    Button,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';
import Swipeable from 'react-native-swipeable';


export class Requests extends  React.Component{
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isClicked: 1,
            dataSource: ds.cloneWithRows([
                {name: ['Аппаратный маникюр','Педикюр','Укладка волос'],date: '12 сентябрь',time: '13:12',price: '12000тг'}, {name: ['Аппаратный маникюр','Укладка волос'],date: '12 сентябрь',time: '13:12',price: '12000тг'},
            ])
        };

    }

    static navigationOptions = () => {
        return({
            headerTitle: <RkText>Все заявки</RkText>,
            headerRight:
                <Image
                    style={{width:25, height:25, marginRight:5}}
                    source={require('../../../assets/icons/notification.png')}
                />,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/brochure-folded.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    };

    renderrow(data){
        return(
            <RequestItem rowData={data} />
        );
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.setState({ isClicked: 1 })}>
                        <RkText style={(this.state.isClicked== 1) ? styles.headerNameActive:styles.headerName}>
                            По дате
                        </RkText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ isClicked: 2 })}>
                        <RkText  style={(this.state.isClicked== 2) ? styles.headerNameActive:styles.headerName}>
                            По цене
                        </RkText>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderrow.bind(this)}
                />

            </View>

        )

    }

}
export class RequestItem extends  React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        const { rowData } = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(
                rowData.name
            )
        });
    }
    _render(data){
        return(
            <Text style={styles.featureText}>{data}</Text>
        );
    }
    render() {
        const { rowData } = this.props;
        const rightButtons = [
            <TouchableOpacity style={styles.rightSwipeItem}>
                <Image
                    style={{width:25, height:25, marginRight:5}}
                    source={require('../../../assets/icons/check_white.png')}
                />
            </TouchableOpacity>,
        ];
        return(
            <Swipeable rightButtons={rightButtons}>
                <View style={styles.itemContainer} >
                    <Text style={styles.countFeatureText}>{rowData.name.length}</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._render.bind(this)}
                    />

                    <View style={styles.dateContainer}>
                        <Text style={{fontWeight:'bold'}}>
                            {rowData.date}
                        </Text>
                        <Text>
                            {rowData.time}
                        </Text>
                        <Text style={{fontWeight:'bold'}}>
                            {rowData.price}
                        </Text>
                    </View>
                </View>
            </Swipeable>

        )

    }

}

let styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 14,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: "#F5FCFF",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightSwipeItem: {
        borderRadius: 5,
        backgroundColor: "#157064",
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        marginTop: 5,
    },
    dateContainer: {
        borderLeftWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 5,
        alignItems: 'center'
    },
    header: {
        width: 180,
        height: 35,
        paddingTop: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerName: {
        fontSize: scale(14),
        color: 'black'
    },
    headerNameActive: {
        color: '#C0A160',
        fontSize: scale(14)
    },
    countFeatureText:{
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: scale(30),
        color: 'black'
    },
    featureText: {
        fontSize: scale(14),
        color: '#157064',
    }

}));