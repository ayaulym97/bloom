import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    Button,
    TouchableOpacity,
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

import {FontAwesome} from '../../../assets/icons';
import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


export class myOrders extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            isClicked: 1,
            starCount: 0
        }
    }
    onStarRatingPress(rating){
        this.setState({
            starCount: rating
        });
    }
    static navigationOptions = () => {
        return({
            headerTitle: <RkText>МОИ ЗАЯВКИ</RkText>,
            headerRight: <TouchableOpacity
                onPress={() => this.navigate('Notification', {name: 'Lucy'})}
            >
                <Image
                    style={{width:25, height:25, marginRight:5}}
                    source={require('../../../assets/icons/notification.png')}
                />

            </TouchableOpacity>,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/bullets.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    };
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                {/*section-1*/}

                <ScrollView>
                <View
                    style={{paddingHorizontal:10, marginVertical: 10, justifyContent: 'space-between', marginHorizontal: 14, height: 160, width: 350, borderColor: 'gray', borderStyle: 'solid', borderWidth: 0.5, borderRadius: 5, shadowOffset: {width: 0, height: 0}, shadowRadius: 2, shadowOpacity: 0.3,}}>
                    <View style={{height:70, paddingTop:10, justifyContent: 'space-between'}}>
                         <RkText style={{fontSize:scale(12)}}>Педикюр - Европейский и  необрезной</RkText>
                        <RkText style={{fontSize:scale(12)}}>Педикюр - Спортивный</RkText>
                         <RkText style={{fontSize:scale(12   )}}>Маникюр - классический</RkText>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <RkText style={{ fontSize:scale(14)}} >2 Сентября, 12:56</RkText>
                        <RkText style={{fontSize:scale(16)}} >12000тг</RkText>
                    </View>
                    <View style={{flexDirection:'row', paddingHorizontal:10, justifyContent:'space-between'}}>
                        <TouchableOpacity style={{backgroundColor:'gray', borderRadius:3}}>
                            <RkText style={{textAlign:'center', paddingVertical:10, color:'white', fontSize:scale(12), width:140, height:35}}>Отменить</RkText>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#C0A160', borderRadius:3}}
                                          onPress={() => this.props.navigation.navigate('myOrdersConfirm')}

                        >
                            <RkText style={{textAlign:'center',paddingVertical:10, color:'white', fontSize:scale(12), width:140, height:35}}>2 отклика</RkText>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{paddingHorizontal:10, marginVertical: 10, justifyContent: 'space-between', marginHorizontal: 14, height: 160, width: 350, borderColor: 'gray', borderStyle: 'solid', borderWidth: 0.5, borderRadius: 5, shadowOffset: {width: 0, height: 0}, shadowRadius: 2, shadowOpacity: 0.3,}}>
                    <View style={{height:70, paddingTop:10, justifyContent: 'space-between'}}>
                        <RkText style={{fontSize:scale(12)}}>Педикюр - Европейский и  необрезной</RkText>
                        <RkText style={{fontSize:scale(12)}}>Педикюр - Спортивный</RkText>
                        <RkText style={{fontSize:scale(12   )}}>Маникюр - классический</RkText>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <RkText style={{ fontSize:scale(14)}} >2 Сентября, 12:56</RkText>
                        <RkText style={{fontSize:scale(16)}} >12000тг</RkText>
                    </View>
                    <View style={{flexDirection:'row', paddingHorizontal:10, justifyContent:'space-between'}}>
                        <TouchableOpacity style={{backgroundColor:'#157064', borderRadius:3}}>
                            <RkText style={{textAlign:'center', paddingVertical:10, color:'white', fontSize:scale(12), width:140, height:35}}>Повторить</RkText>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'gray', borderRadius:3}}
                                          onPress={() => this.props.navigation.navigate('approvedRequest')}
                        >
                            <RkText style={{textAlign:'center',paddingVertical:10, color:'white', fontSize:scale(12), width:140, height:35}}>Подтверждена</RkText>
                        </TouchableOpacity>
                    </View>
                </View>


                </ScrollView>
            </View>


        )
    }
}
let styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    card: {
        marginVertical: 10,
        justifyContent: 'space-between',
        marginHorizontal: 14,
        height: 195,
        width: 350,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 5,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    image: {
        flex: 1,
        width: null,
        height: null,

    },
    icon: {
        height:25,
        width: 25
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
    }
}));