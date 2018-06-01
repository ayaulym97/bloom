import React from 'react';
//noinspection JSUnresolvedVariable
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Button,
    TouchableHighlight
} from 'react-native';

import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import Modal from 'react-native-modal'

import {scale} from '../../../utils/scale';

export class Profile extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
             isModalVisible: false
         },
        this.state={
            editable:false
        };
        this.changeButtonColor =this._changeButtonColor.bind(this);
        
    }

    _changeButtonColor(raw){
        this.setState({editable:!this.state.editable})
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

  render(){

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.infoContainer}>
          <View style={styles.infoWrap}>
              <Text style={styles.name}>
              ИМЯ
          </Text>
              <TextInput
                  style={styles.inputText}
                  placeholder="Кудайберген"
                  placeholderTextColor="black"
                  editable = {this.state.editable}
                  underlineColorAndroid="transparent" size = '10'>
              </TextInput>

          </View>
          <View style={styles.infoWrap}>
              <Text style={styles.name}>
                  ФАМИЛИЯ
              </Text>
              <TextInput
                  style={styles.inputText}
                  placeholder="Кудайбергенов"
                  placeholderTextColor="black"
                  editable = {this.state.editable}
                  underlineColorAndroid="transparent">
              </TextInput>

          </View>
          <View style={styles.infoWrap}>
              <Text style={styles.name}>
                  НОМЕР ТЕЛЕФОНА
              </Text>
              <TextInput
                  style={ styles.inputText}
                  placeholder="+77028866666"
                  placeholderTextColor="black"
                  editable = {this.state.editable}
                  keyboardType='numeric'

                  underlineColorAndroid="transparent">
              </TextInput>

          </View>
          <View style={styles.infoWrap}>
              <Text style={styles.name}>
                  ПАРОЛЬ
              </Text>
              <TextInput
                  secureTextEntry={true}
                  style={this.state.editable ? styles.none:styles.inputText}
                  placeholder="************"
                  placeholderTextColor="black"
                  editable = {this.state.editable}
                  underlineColorAndroid="transparent">
              </TextInput>
              <TouchableOpacity style={this.state.editable ? styles.inputText:styles.none}  onPress={this._showModal}>
                  <Text>Изменить</Text>
                  <Modal
                    isVisible={this.state.isModalVisible}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}>
                    <View style={styles.modal}>
                        <View  style={styles.modalView}>
                            <Text style={styles.modalTitle}>ИЗМЕНЕНИЕ ВАШЕГО ПАРОЛЯ</Text>
                            <View style={styles.changePasswordBlock}>
                                <View style={styles.changePasswordWrap}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="СТАРЫЙ ПАРОЛЬ"
                                    placeholderTextColor="black"
                                    keyboardType='numeric'
                                />
                                </View>
                                <View style={styles.changePasswordWrap}>
                                    <TextInput
                                        style={styles.inputText}
                                        secureTextEntry 
                                        placeholder="НОВЫЙ ПАРОЛЬ"
                                        placeholderTextColor="black"
                                        returnKeyType="go"
                                    />
                                </View> 
                                <View style={styles.changePasswordWrap}>
                                        <TextInput
                                            style={styles.inputText}
                                            secureTextEntry
                                            placeholder="ПОДТВЕРДИТЕ ПАРОЛЬ"
                                            placeholderTextColor="black"
                                            returnKeyType="go"
                                        />
                                    </View>
                                </View>
                                <View  style={styles.buttonBlock}>
                                <TouchableOpacity style={styles.firstModalBtn} onPress= {this._hideModal}>
                                    <Text style={styles.type}>Отменить</Text>
                                </TouchableOpacity>
                               
                                <TouchableOpacity style={styles.secondModalBtn}>
                                    <Text style={styles.type}>Сохранить</Text>
                                </TouchableOpacity>
                            </View>

                            </View>
                        </View> 
                    </Modal>
                
              </TouchableOpacity>
          </View>
          </View>

          <KeyboardAvoidingView behavior='padding' type='button' style={styles.button}>
              <TouchableOpacity
                  onPress={this.changeButtonColor}
                  style={this.state.editable ?styles.saveButton:styles.buttonContinue}>
                  <Text style={this.state.editable ?styles.none:styles.types}>Редактировать</Text>
                  <Text style={this.state.editable ?styles.types:styles.none}>Сохранить</Text>
              </TouchableOpacity>
         </KeyboardAvoidingView>


      </KeyboardAvoidingView>
    )
  }
}


Profile.navigationOptions=()=> {

    return({

        headerTitle:<Text> МОЙ АККАУНТ</Text>,
        headerRight:
            <TouchableHighlight>
            <Image style={styles.notification}  source={require('../../../assets/icons/notification.png')}/>
            </TouchableHighlight>
        })
};

let styles=RkStyleSheet.create({

        notification: {
            height: 25,
            width: 25,
            marginRight: 15,
        },
        container: {
            backgroundColor: 'white',
            flex: 1,
            padding: scale(20),
            // fontFamily:'Comfortaa-regular',
        },
        infoWrap:{
            flexDirection:'row',
            justifyContent:'space-between',
            borderBottomWidth: 1,
            paddingHorizontal: scale(8),
            paddingVertical:scale(16),
            borderColor: '#d7d7d7',
            paddingBottom: 12,

        },
        name: {
            color: '#4d5d6c',
            fontSize: 12,

        },
        button: {
            flex: 1,
            paddingHorizontal: 65,
            justifyContent:'flex-end',
            padding: 50,
            
        },
         buttonContinue: {
            height:50,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:3,
            backgroundColor:'#d7d7d7',



         },
         types: {
            color: 'white',
            fontFamily:'Comfortaa-regular',
            fontWeight: 'bold',
             fontSize: 17
         },
        type: {
        color: 'white',
        fontFamily:'Comfortaa-regular',
    },


    notification: {
        height: 25,
        width: 25,
        marginRight: 15,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: scale(20),
        fontFamily:'Comfortaa-regular',
    },
    infoContainer:{
        flexGrow:3
    },
    infoWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        paddingHorizontal: scale(8),
        paddingVertical:scale(16),
        borderColor: '#d7d7d7',
        paddingBottom: 12,
    },
    inputText:{
        textAlign:'right'
    },
    name: {
        color: '#4d5d6c',
        fontSize: 12,
    },
    button: {
        flex: 1,
        paddingHorizontal: 65,
        justifyContent:'center',
        paddingVertical:20,
        fontSize: 12,
    },
    buttonContinue: {
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#d7d7d7',
    },
    saveButton:{
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#C0A160'
    },
    
    none:{
        display:'none',

    },
    modal:{
        backgroundColor:'black',
        width: 330,
        height: 320,
        backgroundColor: "#fff",
        marginVertical:20,
        justifyContent: 'space-between',
        
    },
    modalView:{
        flex:1,
        flexDirection:'column',
        marginTop:20,
    },
    modalTitle:{
        fontSize:15,
        fontFamily:'Comfortaa-regular',
    
        paddingHorizontal:30,
        fontWeight:'bold'
    }, changePasswordBlock:{
        marginTop:70,
        flexDirection:'column',
        width:270,
        marginHorizontal:30

        
    
    },
    changePasswordWrap:{
        marginVertical:5,
        height:30,
        alignItems:'flex-start',
        borderBottomWidth:1,
        borderBottomColor:'#D7D7D7',
        
    },
    inputText:{
        alignItems:'flex-start',
        fontSize:10,
        fontFamily:'Comfortaa-regular',
        color:'#D7D7D7',
        
    },
    firstModalBtn:{
        width:130,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#A4A4A4',

    },
    secondModalBtn:{
        width:130,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#C5A76D',

    },buttonBlock:{flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        width:270,
        marginLeft:30,
        marginTop:30,}

    });

