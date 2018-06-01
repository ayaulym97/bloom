import React from 'react';
import {RkText, RkStyleSheet,RkTextInput } from 'react-native-ui-kitten';
import Button from 'react-native-button';
import {TouchableOpacity,TextInput, Image, View, Text, Alert, ScrollView} from "react-native";
import {scale} from "../../../utils/scale";
import _remove from 'lodash/remove';


export class neworder extends  React.Component{



    static navigationOptions = () => {
        return({
            headerTitle: <RkText>Новая заявка</RkText>,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/brochure-folded.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            headerRight:  <RkText>ОТМЕНИТЬ</RkText>
        })
    };





    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <View style={styles.progressView}>
                </View>
                <View style={styles.contentHeader}>
                    <View>
                        <Text style={styles.contentText}>
                            Укажите цену и радиус поиска салона или специалиста
                        </Text>
                    </View>
                    <View style={styles.mainBlock}>
                        <Text style={styles.text}>Цена за услугу</Text>
                        <View style={styles.blockRow}>
                            <TextInput style={styles.txtInput} placeholder='Введите предлагаемую цену' />
                            <Text style={styles.type}>тг</Text>

                        </View>
                        <Text style={styles.text}>Радиус поиска</Text>
                        <View style={styles.blockRow}>

                            <TextInput style={styles.txtInput} placeholder='Укажите радиус поиска' />
                            <Text style={styles.type}>км</Text>

                        </View>

                    </View>




                    <View style={styles.bottomContent}>
                        <Button
                            onPress={()=>{
                                navigate('Calendar')
                            }}
                            style={styles.nextButton}
                            color="white">
                            Cоздать
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    mainView:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    progressView:{
        width: '100%',
        height: 5,
        backgroundColor: '#147063'
    },

    contentHeader:{
        paddingTop: scale(10),
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    contentText:{
        marginTop: scale(20),
        textAlign: 'center',
        fontSize: scale(12),
        color: '#000000',
        fontFamily: 'Comfortaa-Bold'

    },

    nextButton:{
        borderRadius: 4,
        width: scale(170),
        fontSize: scale(17),
        paddingVertical: scale(5),

        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily:'Comfortaa-Bold',
        backgroundColor: '#C2A162'
    },
    bottomContent:{
        height: 50,
        textAlign: 'center',
        backgroundColor:'#F9F9F9',

        marginTop: scale(180),


    },
    mainBlock:{
        marginTop:scale(90),
        marginHorizontal:scale(30),
        flexDirection:'column',
        width:300,

    }
    ,text:{
        fontSize: scale(14),
        marginTop:20
    },txtInput:{

        borderRadius:3,
        borderColor:'#DADADA',
        height: scale(50),
        width:240,
        borderWidth:1

    },
    blockRow:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:10
    },type:{
        color: '#e0e0e0',
        fontSize: 20,
        borderColor:'#e0e0e0',
        borderWidth: 1,
        padding:14,
        justifyContent: 'center',
        textAlign: 'center',
    }



}));