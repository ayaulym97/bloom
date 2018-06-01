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
    KeyboardType,
    ScrollView,
    TouchableOpacity,
    ListView
} from 'react-native';

import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

class ListOfServices extends React.Component {
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {name: 'Салон красоты "Loreal HOMME"', parent: ['examplefirst', 'examplesecond', 'examplethird']},
                {name: 'Салон красоты "Loreal HOMME"', parent: ['examplefirsts', 'examplesecond', 'examplethird']},
                {name: 'Салон красоты "Loreal HOMME"', parent: ['examplefirstdsadas', 'examplesecond', 'examplethird']},
                {name: 'Салон красоты "Loreal HOMME"', parent: ['examplefirsts', 'examplesecond', 'examplethird']},
                {name: 'Салон красоты "Loreal HOMME"', parent: ['examplefirdsdss', 'examplesecond', 'examplethird']},
                {name: 'Салон красоты "Loreal HOMME"', parent: ['examplefirsts', 'examplesecond', 'examplethird']}
         ]),
        };
    }

    renderrow(data){
        return(
            <View style={styles.authWrap}>
                <ScrollView style={styles.authChooseFirst}>
                    <TouchableOpacity>
                       <Text>
                            {data.name}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.authChooseSecond}>
                        <Text>
                            {data.parent}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderrow.bind(this)}
            />
        );
    }
}

export class Service extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('../../../../assets/images/BG.png')}
        >
        {/*go back */}
        <View style={styles.viewHeader}>
            <Image 
            style={styles.leftArrowIcon}
            source={require('../../../../assets/icons/left-arrow.png')}
            />
            <RkText style={styles.headerText}>
                Назад
            </RkText>         
        </View>
       {/*header*/}
        <RkAvoidKeyboard style={styles.headerBlock}>
            <View style={styles.headerBlockContainer}>
                <Text style={styles.headerTitle}>
                    Выберите виды услуг, которые вы предоставляете
                </Text>
            </View>
        </RkAvoidKeyboard>

        <RkAvoidKeyboard style={styles.authBlock}>
          <View style={styles.authWrap}>
              <ListOfServices/>
          </View>
        </RkAvoidKeyboard>

        <RkAvoidKeyboard style={styles.buttonBlock}>
          <TouchableHighlight
              style={styles.buttonLogin}
              
            >
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
    flex: 3,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  headerBlockContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 35,
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
  logo:{
    width:50,
    height:48
  },
  authBlock:{
    flex:8,
    justifyContent:'flex-end',
  },
  authWrap:{
    flexDirection:'row',
    flex: 1,
    alignItems:'center',
    borderRadius: 3,
  },

  authChooseFirst: {
    flex: 2,
    backgroundColor: 'green',
  },

  authChooseSecond: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  authWrapButton: {
    flex: 1,
    orderBottomWidth:1,
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
    flex:3,
    paddingHorizontal:50,
    justifyContent:'center',
    paddingBottom: 20,
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
  }
}));

