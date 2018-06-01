import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    Button,
    ListView,
    TouchableOpacity
} from 'react-native';

import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

import {FontAwesome} from '../../../assets/icons';
import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


export class confirmRequests extends  React.Component{
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isClicked: 1,
            dataSource: ds.cloneWithRows([
                {title: 'Алмагуль Маженова',name: ['Аппаратный маникюр','Педикюр','Укладка волос'],date: '12 сентябрь',time: '13:12',price: '12000тг'}, {title: 'Катипаш Кулпашевна',name: ['Аппаратный маникюр','Укладка волос'],date: '12 сентябрь',time: '13:12',price: '12000тг'},
            ])
        };
    }

    static navigationOptions = () => {
        return({
            headerTitle: <RkText>Подтвержденные</RkText>,
            headerRight:
                <Image
                    style={{width:25, height:25, marginRight:5}}
                    source={require('../../../assets/icons/notification.png')}
                />,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/bullets.png')}
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
    render(){
        return(
            <View style={styles.container}>
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
        return(
            <View style={styles.firstContainer}>
                <Text style={{fontWeight:'bold', fontSize: scale(14), marginLeft: 10,marginRight: 10,paddingBottom: 5, borderBottomWidth:0.5, borderColor:'gray'}}>
                    {rowData.title}
                </Text>
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
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: "#F5FCFF",
                    padding: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../../../assets/icons/call_green.png')}
                               style={styles.icon}/>
                        <Text style={{
                            marginLeft: 10,
                            fontWeight:'bold',
                            marginRight: 10
                        }}>
                            Позвонить
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../../../assets/icons/email_green.png')}
                               style={styles.icon2}/>
                        <Text style={{
                            marginLeft: 10,
                            fontWeight:'bold',
                            marginRight: 10
                        }}>
                            Написать
                        </Text>
                    </View>
                </View>
            </View>
        )

    }

}
let styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    firstContainer:{
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'gray',
        borderWidth: 1,
        paddingTop: 5

    },
    image: {
        flex: 1,
        width: null,
        height: null,

    },
    icon: {
        height:24,
        width: 24,
        resizeMode: 'cover',
    },
    icon2: {
        height:24,
        width: 30,
        resizeMode: 'cover',
    },
    info:{
        color:'white',
        fontSize: scale(14),
        marginLeft: 10
    },
    button: {
        height: 40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:"#C0A160"
    },
    textButton: {
        color: 'white'
    },
    viewContent: {
        marginHorizontal:10,
        justifyContent:'space-between'
    },
    itemContainer: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 14,
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