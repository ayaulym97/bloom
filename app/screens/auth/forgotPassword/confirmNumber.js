import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    KeyboardType
} from 'react-native';

import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';

import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import {FontAwesome} from '../../../assets/icons';
import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


export class confirmNumber extends React.Component{
    constructor(props){
        super(props)

        this.state


    }


    render(){
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../../../assets/images/BG.png')}
                >
                    {/*go back */}
                    <View style={styles.viewHeader}>
                        <Image
                            style={styles.leftArrowIcon}
                            source={require('../../../assets/icons/left-arrow.png')}
                        />
                        <RkText style={styles.headerText}>
                            Назад
                        </RkText>
                    </View>
                    {/*header*/}
                    <RkAvoidKeyboard style={styles.headerBlock}>
                        <View style={styles.headerBlockContainer}>
                            <Text style={styles.headerTitle}>
                                Пожалуйста введите ваш номер телефона
                            </Text>
                        </View>
                    </RkAvoidKeyboard>

                    <RkAvoidKeyboard style={{flex:1}}>
                        <View>
                            <RkText style={{textAlign:'center', color: 'white', fontSize:scale(13), marginHorizontal:20, marginTop:30, opacity:0.7}}>Вы подтверждаете свою личность, набрав номер телефона</RkText>
                        </View>

                        <View style={styles.authWrap}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../../../assets/icons/phone-call.png')}
                            />
                            <TextInput
                                style={styles.inputText}
                                maxLength={10}
                                placeholder="Введите ваш номер"
                                placeholderTextColor="#D7D7D7"
                                keyboardType='numeric'
                                underlineColorAndroid="transparent"

                            />
                        </View>
                    </RkAvoidKeyboard>

                    <RkAvoidKeyboard style={styles.buttonBlock}>
                        <TouchableHighlight
                            style={styles.buttonLogin}
                            onPress={() =>
                                navigate('resetMain')
                            }                        >
                            <Text
                                style={styles.buttonText}
                            >
                                Продолжить
                            </Text>
                        </TouchableHighlight>
                    </RkAvoidKeyboard>

                </Image>
            </View>
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
    },
    headerBlockContainer: {
        flex: 1,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        textAlign:'center',
        marginTop:10,
        fontSize:14,
        color:'#D7D7D7',
        backgroundColor:'transparent'
    },
    headerTitle: {
        fontFamily:'Comfortaa-regular',
        color:'#fff',
        fontSize: 19,
        backgroundColor:'transparent',
        textAlign: 'center',
    },
    headerSubtitle: {
        marginTop: 24,
        fontFamily:'Comfortaa-regular',
        color:'#fff',
        fontSize: 14,
        backgroundColor:'transparent',
        textAlign: 'center',
    },
    logo:{
        width:50,
        height:48
    },
    authBlock:{
        flex:1,
        paddingHorizontal:45,
        justifyContent:'space-around',
    },

    buttonBlock:{
        flex:1,
        paddingHorizontal:50,
        justifyContent:'center'
    },
    buttonLogin:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:"#C0A160"
    },
    buttonText:{
        fontFamily:'Comfortaa-regular',
        color:'#fff',
        fontSize:18
    },

    //go back

    headerText:{
        textAlign:'center',
        marginTop:10,
        fontSize:14,
        color:'#D7D7D7',
        backgroundColor:'transparent'
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
    authBelowInput:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    textBelowInput:{
        fontFamily:'Comfortaa-regular',
        textDecorationLine: 'underline',
        fontSize:13,
        color:'#fff'
    },
    authAboveInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginVertical: 16
    },
    textAboveInput:{
        fontFamily:'Comfortaa-regular',
        fontSize:26,
        color:'#fff'
    },
    authAndResendBinder:{
        flexDirection: 'column',
        justifyContent: 'center'
    },
    authWrap:{
        marginTop: 20,
        flexDirection:'row',
        height:40,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#D7D7D7',
        marginHorizontal:50,

    },
    inputIcon:{
        marginLeft:14,
        width:20,
        height:20
    },
    inputText:{
        flex:1,
        textAlign: 'center',
        fontSize:16,
        fontFamily:'Comfortaa-regular',
        color:'#D7D7D7',
    },
}));

