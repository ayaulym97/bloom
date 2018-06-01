import React from 'react';
import {
    View,
    Image,
    Keyboard,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardType,
    KeyboardAvoidingView

} from 'react-native';

import {
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';


import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

import MapView from 'react-native-maps';


import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


export class Login extends  React.Component{
  constructor(props){
    super(props);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.login=this.login.bind(this);
    this.state={}
  }
  // test

  login = () => {
    let toHome = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    });
    this.props.navigation.dispatch(toHome)
  };

    forgotPassword =() =>{
      this.props.navigation.navigate('ForgotPassword');
    };

  register = () => {
    console.log('Navigated to second scene')
    this.props.navigation.navigate('Register')
  };

  render(){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          style={styles.background}
          source={require('../../../assets/images/BG.png')}
        >

        <View style={styles.headerBlock}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logo.png')}
          />
          <RkText
            style={styles.headerText}
          >
            ALLURING. ATTRACTIVE. BLESSFUL
          </RkText>
        </View>

        <View style={styles.authBlock}>
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
          <View style={styles.authWrap}> 
              <Image
                style={styles.inputIcon}
                source={require('../../../assets/icons/key.png')}
              />
              <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Введите ваш пароль"
                placeholderTextColor="#D7D7D7"
                returnKeyType="go"
                underlineColorAndroid="transparent"
              />
          </View>
        </View>
        <View style={styles.buttonBlock}>
          <TouchableOpacity
              style={styles.buttonLogin}
              onPress={this.login}
              
            >
              <Text
                style={styles.buttonText}
              >                
              
                Войти
              </Text>
            </TouchableOpacity>
            <View
              style={styles.row}
            >
              <TouchableOpacity

                onPress={this.forgotPassword}
              >
                <Text
                  style={[styles.buttonText,styles.buttonlineText]}
                >
                  Забыли пароль?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.register}>
                <Text
                  style={[styles.buttonText,styles.buttonlineText]}
                >
                Регистрация
                </Text>
              </TouchableOpacity>
            </View>
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
    paddingTop:50
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
  authBlock:{
    flex:1,
    paddingHorizontal:50,
    justifyContent:'flex-end'
  },
  authWrap:{
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
    height:20
  },
  inputText:{
    flex:1,
    textAlign: 'center',
    fontSize:16,    
    fontFamily:'Comfortaa-regular',
    color:'#D7D7D7',
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
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  buttonlineText:{
    fontSize:13,
      backgroundColor:'transparent'
  },
    mapContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
  
}));

