import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';


import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';

import {StackNavigator, Navigator, NavigationActions, navigationOptions} from 'react-navigation';

export class registerStep2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../../../../assets/images/BG.png')}
                >
                    <TouchableOpacity style={styles.viewHeader} onPress={() =>{this.props.navigation.goBack()}}>
                        <Image
                            style={styles.leftArrowIcon}
                            source={require('../../../../assets/icons/left-arrow.png')}
                        />
                        <RkText style={styles.headerText}>
                            Назад
                        </RkText>
                    </TouchableOpacity>
                    <View style={styles.headerBlockSecond}>
                        <RkText style = {styles.contentTextSecond}>
                            Для регистрации в сервере введите контактные данные
                        </RkText>
                    </View>
                    <View style={styles.registBlock}>
                        <View style={styles.registWrap}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../../../../assets/icons/phone-call.png')}
                            />
                            <TextInput
                                style={styles.inputText}
                                maxLength={10}
                                placeholder="Введите номер"
                                placeholderTextColor="#D7D7D7"
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={styles.registWrap}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../../../../assets/icons/key.png')}
                            />
                            <TextInput
                                style={styles.inputText}
                                secureTextEntry
                                placeholder="Введите пароль"
                                placeholderTextColor="#D7D7D7"
                                returnKeyType="go"
                            />
                        </View>
                        <View style={styles.registWrap}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../../../../assets/icons/key.png')}
                            />
                            <TextInput
                                style={styles.inputText}
                                secureTextEntry
                                placeholder="Повторите пароль"
                                placeholderTextColor="#D7D7D7"
                                returnKeyType="go"
                            />
                        </View>
                    </View>
                    <View style={styles.footerBlock}>
                        <TouchableOpacity
                            style={styles.buttonContinue}
                            onPress={() =>
                                navigate('registerStep3', { name: 'Aru' })
                            }
                        >
                            <Text style={styles.types}>Продолжить</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </KeyboardAvoidingView>
        )
    }
}
let styles = RkStyleSheet.create(theme => ({
    container:{
        flex:1,
    },
    background:{
        flex:1,
        width:null,
        height:null
    },
    headerBlock:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:30
    },
    headerText:{
        textAlign:'center',
        marginTop:10,
        fontSize:14,
        color:'#D7D7D7',
        backgroundColor:'transparent'
    },
    logo:{
        width:50,
        height:48
    },
    viewHeader:{
        marginTop: 25,
        marginLeft: 10,
        flexDirection: 'row'
    },
    leftArrowIcon:{
        marginTop: 5,
        width: 20,
        height: 20
    },
    contentText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#D7D7D7',
        marginBottom: 40
    },
    buttonBlock:{
        flex:3,
        paddingHorizontal:65,
    },
    buttons: {
        height:50,
        marginBottom: 10,
        // width: 300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'rgba(239,239,239,0.3)'
        // backgroundColor:this.isClicked ? '#157064',
    },
    activeButtons: {
        height:45,
        marginBottom: 10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor: '#157064'
    },
    types: {
        color: 'white',
        fontFamily:'Comfortaa-regular',
    },
    headerBlockSecond:{
        flex:1,
        justifyContent:'center'
    },
    contentTextSecond:{
        textAlign: 'center',
        fontSize: 16,
        color: '#D7D7D7',
    },
    registBlock:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:60,
    },
    registWrap:{
        marginVertical:5,
        flexDirection:'row',
        height:40,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#D7D7D7'
    },
    inputIcon:{
        marginLeft:14,
        width:20,
        height:20,
    },
    inputText:{
        textAlign: 'center',
        fontSize:16,
        fontFamily:'Comfortaa-regular',
        color:'#D7D7D7',
        marginLeft: 10
    },
    buttonContinue: {
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:"#C0A160",

    },
    footerBlock: {
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: 65
    },
    headerBlockThird:{
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
    },
    blockPhoto: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(21,112,100, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "rgba(239,239,239,0.3)",
        borderStyle: 'dashed'
    },
    blockPhotoIcon: {
        width:30  ,
        height: 25,
        justifyContent: 'center',
    },
    blockPhotoText: {
        marginTop: 5,
        fontSize:13,
        color: '#fff'
    },
    registBlock2:{
        marginTop: 30,
        flex:2,
        paddingHorizontal:60,
    },
    modal:{
        width: 300,
        height: 200,
        marginLeft: 20,
        backgroundColor: "#fff",
        padding: 12,
        justifyContent: 'space-between'
    },
    modalView:{
        flexDirection: 'row',
    },
    modalIcon:{
        width:20,
        height:22,
        marginRight: 5
    },
    specText: {
        color: 'gray',
        fontSize: 13,
        width: 250
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
}));



