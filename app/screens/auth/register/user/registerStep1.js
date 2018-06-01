import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    TouchableOpacity,
    TextInput,
    //Picker,
    //Item,
} from 'react-native';


import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';

import {StackNavigator, NavigationActions } from 'react-navigation';


export class registerStep1 extends  React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {goBack} = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../../../../assets/images/BG.png')}
                >
                    <TouchableOpacity style={styles.viewHeader} onPress={() =>{this.props.navigation.goBack('Login')}}>
                        <Image
                            style={styles.leftArrowIcon}
                            source={require('../../../../assets/icons/left-arrow.png')}
                        />
                        <RkText style={styles.headerText}>
                            Назад
                        </RkText>
                    </TouchableOpacity>
                    <RkAvoidKeyboard style={styles.headerBlock}>
                        <Image
                            style={styles.logo}
                            source={require('../../../../assets/images/logo.png')}
                        />
                        <RkText
                            style={styles.headerText}
                        >
                            ALLURING. ATTRACTIVE. BLESSFUL
                        </RkText>
                    </RkAvoidKeyboard>

                    <RkAvoidKeyboard style={styles.buttonBlock}>
                        <RkText style = {styles.contentText}>
                            Я регистрируюсь как
                        </RkText>
                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={() =>
                                navigate('registerStep2')
                            }
                        >
                            <Text style={styles.types}>Пользователь</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={() =>
                                navigate('registerStep2')
                            }
                        >
                            <Text style={styles.types}>Салон</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={() =>
                                navigate('registerStep2')
                            }
                            //onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}

                        >
                            <Text style={styles.types}>Специалист</Text>
                        </TouchableOpacity>
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
    types: {
        color: 'white',
        fontFamily:'Comfortaa-regular',
    }
}));


