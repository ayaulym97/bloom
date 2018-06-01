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


export class resetPassword extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
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
                    Введите новый пароль для входа в систему  
                </Text>
            </View>
        </RkAvoidKeyboard>

        <RkAvoidKeyboard style={styles.authBlock}>
    
            <View style={styles.authWrap}> 
                    <Image
                        style={styles.inputIcon}            
                        source={require('../../../assets/icons/password.png')}
                    />
                    
                    <TextInput
                        style={styles.inputText}
                        maxLength={15}
                        secureTextEntry
                        placeholder="Введите новый пароль"
                        placeholderTextColor="#D7D7D7"
                    />
                    
            </View>
             <View style={styles.authWrap}> 
                    <Image
                        style={styles.inputIcon}            
                        source={require('../../../assets/icons/password.png')}
                    />
                    
                    <TextInput
                        style={styles.inputText}
                        maxLength={15}
                        secureTextEntry
                        placeholder="Подтвердите новый пароль"
                        placeholderTextColor="#D7D7D7"
                    />
                    
            </View>
        </RkAvoidKeyboard>

        <RkAvoidKeyboard style={styles.buttonBlock}>
          <TouchableHighlight
              style={styles.buttonLogin}
              
            >
              <Text
                style={styles.buttonText}
              >                
                Подтвердить
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
    paddingTop:50,
  },
  headerBlockContainer: {
    flex: 1,
    width: 280,
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
  authBlock:{
    flex:1,
    paddingHorizontal:45,
    justifyContent:'center',
  },
  authWrap:{
    marginVertical:5,    
    flexDirection:'row',
    height:40,
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#D7D7D7',
  },
  inputIcon:{
    marginLeft:4,
    width:20,
    height:20,
  },
  inputText:{
    flex:1,
    textAlign: 'center',
    fontSize:15,    
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
}));

