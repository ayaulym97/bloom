import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
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

import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


export class orderConfirmedSuccessfully extends Component {
    _func(isActive){

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <RkText style={styles.headerText}>ВЫ УСПЕШНО ПОДТВЕРДИЛИ ЗАЯВКУ!</RkText>
                </View>
                <Image style={styles.photo}
                        source={require('../../../assets/img/illustration.png')}
                />
                <RkText style={styles.saloonName}>"L`oreal Homme"</RkText>
                {/* <View style={{flex:1,flexDirection:'row'}}> */}
                {/* <Image style={styles.typeIcon}
            source={require('./manicure-white.png')} /> */}


                <RkText style={styles.info}>Маникюр - Аппаратный маникюр</RkText>

                <RkText style={styles.info}>Время: <RkText style={{color: 'gray', fontSize:scale(12)}}>2 Сентября, 12:39</RkText></RkText>
                <RkText style={styles.info}>Цена: <RkText style={{color:'gray', fontSize:scale(12)}}>5000тг</RkText></RkText>


                {/* </View> */}
                <TouchableOpacity
                    style={styles.buttonContinue}
                    onPress={() => this.props.navigation.navigate('Main')}

                >
                    <RkText style={styles.buttonText}>
                        На главную
                    </RkText>
                </TouchableOpacity>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 16,
        textAlign: 'center',
    },
    header: {
        width:260,
        height:50,
        marginHorizontal:70,
        marginTop:20
    },
    photo:{
        height:300,
        width:400,
    },
    saloonName:{
        color:'#157064',
        paddingHorizontal:20,
        fontSize: scale(16),
        marginBottom: 20
    },
    typeIcon:{
        width:20,
        height:20,
        paddingLeft:20
    },
    info:{
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 5,
      fontSize: scale(12)
    },
    buttonContinue:{
        height:40,
        marginTop:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#157064',
        marginHorizontal:80
    },
    buttonText:{
        fontSize:scale(18),
        color:'#fff'

    },

});

