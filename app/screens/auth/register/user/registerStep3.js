import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

import Modal from 'react-native-modal'


import {
    RkText,
    RkStyleSheet,
} from 'react-native-ui-kitten';

import {StackNavigator, Navigator, navigationOptions} from 'react-navigation';


export class registerStep3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isModalVisible: false
        }
    }
    

    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })

//static navigationOptions = {
      //  header: {
        //    visible: false
       // }
    //};
    render(){
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../../../../assets/images/BG.png')}>
                    <TouchableOpacity style={styles.viewHeader} onPress={() =>{this.props.navigation.goBack()}}>
                        <Image
                            style={styles.leftArrowIcon}
                            source={require('../../../../assets/icons/left-arrow.png')}
                        />
                        <RkText style={styles.headerText}>
                            Назад
                        </RkText>
                    </TouchableOpacity>

                    <View behavior="padding" style={styles.headerBlockThird}>
                        <View style={styles.blockPhoto}>
                            <Image style={styles.blockPhotoIcon} source={require('../../../../assets/icons/photo-camera.png')}/>
                            <RkText style={styles.blockPhotoText}>Добавить</RkText>
                        </View>
                    </View>
                    <View style={styles.registBlock2}>
                        <View style={styles.registWrap}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../../../../assets/icons/man.png')}
                            />
                            <TextInput
                                style={styles.inputText}
                                maxLength={10}
                                placeholder="Введите ваше имя"
                                placeholderTextColor="#D7D7D7"
                            />
                        </View>
                        <View style={styles.registWrap}>
                            <Image
                                style={styles.inputIcon}
                                source={require('../../../../assets/icons/man.png')}
                            />
                            <TextInput
                                style={styles.inputText}
                                maxLength={10}
                                placeholder="Введите вашу фамилию"
                                placeholderTextColor="#D7D7D7"
                            />
                        </View>
                        <TouchableOpacity onPress={this._showModal}>
                            <View style={styles.registWrap}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../../../../assets/icons/placeholder.png')}
                                />
                                <TextInput
                                    style={styles.inputText}
                                    maxLength={10}
                                    placeholder="Алматы"
                                    placeholderTextColor="#D7D7D7"
                                />
                                <Modal
                                    isVisible={this.state.isModalVisible}
                                    animationIn={'slideInLeft'}
                                    animationOut={'slideOutRight'}
                                >
                                    <View style={styles.modal}>
                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Use location?</Text>
                                        <Text style={{fontSize: 15, color: 'gray'}}>Your device settings will be changed.</Text>
                                        <Text style={{fontSize: 14, color: '#157064'}}>Learn more</Text>
                                        <View style={styles.modalView}>
                                            <Image style={styles.modalIcon} source={require('../../../../assets/icons/location.png')}/>
                                            <Text style={styles.specText}>GPS, Wi-fi and sell networks will
                                                be used for location</Text>
                                        </View>
                                        <View style={styles.modalButtons}>
                                            <TouchableOpacity onPress= {this._hideModal}><Text style={{color: '#157064'}}>CANCEL</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={this._hideModal} style={{marginLeft:5}}><Text style={{color: '#157064'}}>TURN ON</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                               
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerBlock}>
                        <TouchableOpacity
                            style={styles.buttonContinue}
                            onPress={this.done}
                        >
                            <Text style={styles.types}>Завершить</Text>
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
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'rgba(239,239,239,0.3)'
    },

    types: {
        color: 'white',
        fontFamily:'Comfortaa-regular',
    },
    contentTextSecond:{
        textAlign: 'center',
        marginTop: 100 ,
        fontSize: 16,
        color: '#D7D7D7',
    },
    registBlock:{
        marginTop: 60,
        flex:2,
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
        justifyContent:"center",
        paddingHorizontal: 65
    },
    headerBlockThird:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    blockPhoto: {
        height: 90,
        width: 90,
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
        flex:1,
        justifyContent:'center',
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


