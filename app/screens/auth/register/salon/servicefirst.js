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
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';

import {  
  FindFriends
} from '../../../../components/findFriends';

export class Servicefirst extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      first: false,
      second: false,
      third: false,
      fourth: false,
    }
  }

  render() {
    let {width} = Dimensions.get('window');
    
    return (
      <View style={styles.container}>
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
             <FindFriends text='Уход за ногтями'
                         selected={this.state.first}
                         onPress={() => {
                           this.setState({first: !this.state.first})
                         }}
              />

              <FindFriends text='Уход за волосами'
                         selected={this.state.second}
                         onPress={() => {
                           this.setState({second: !this.state.second})
                         }}
              />

              <FindFriends text='Макияж'
                         selected={this.state.third}
                         onPress={() => {
                           this.setState({third: !this.state.third})
                         }}
              />

              <FindFriends text='Уход за телом'
                         selected={this.state.fourth}
                         onPress={() => {
                           this.setState({fourth: !this.state.fourth})
                         }}
              />
          </View>
        </RkAvoidKeyboard>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container:{
    flex:1,
  },
  headerBlock:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
  },
  headerTitle: {
    fontFamily:'Comfortaa-regular',
    color:'#fff',
    fontSize: 19,
    backgroundColor:'transparent',
    textAlign: 'center',
  },
  headerSubtitle: {
    marginTop: 20,
    fontFamily:'Comfortaa-regular',
    color:'#fff',
    fontSize: 14,
    backgroundColor:'transparent',
    textAlign: 'center',
  },

  authBlock:{
    flex:3,
    paddingHorizontal:35,
    justifyContent:'flex-end',
  },
  authWrap:{
    marginTop: 10,   
    flexDirection:'column',
    flex: 1,
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
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
  rowfirst: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  }
}));