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
  RkText,
  RkButton,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme
} from 'react-native-ui-kitten';
import {RkStyleSheet} from 'react-native-ui-kitten';


export class ServiceMain extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('../../../../assets/images/BG.png')}
        >

        <View style={styles.viewHeader}>
            <Image 
              style={styles.leftArrowIcon}
              source={require('../../../../assets/icons/left-arrow.png')}
            />
            <RkText style={styles.headerText}>
                Назад
            </RkText>         
        </View>

          <RkAvoidKeyboard style={styles.headerBlock}>
            <RkText
                style={styles.headerTitle}
            >
              Выберите виды услуг
            </RkText>
            <RkText
                style={styles.headerSubtitle}
            >
              Укажите те виды услуг, которые вы предоставляете
            </RkText>
          </RkAvoidKeyboard>

          <RkAvoidKeyboard style={styles.authBlock}>
            <View style={styles.authWrap}>
            </View>
          </RkAvoidKeyboard>

        <RkAvoidKeyboard style={styles.buttonBlock}>
          <TouchableHighlight
              onPress={(index) => this.changeIndex(index)}
              style={styles.buttonLogin}
            >
              <Text
                style={styles.buttonText}
              >                
              Далее
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
    flex:3,
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
  buttonBlock:{
    flex:2,
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
  }
}));

