import React from 'react';
import Carousel from 'react-native-snap-carousel';

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
  NavigationActions
} from 'react-navigation';

import {FontAwesome} from '../../assets/icons';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';


export class AddPhoto extends  React.Component{
 
  render(){
    return (
      <View style={styles.container}> 
        <Image style={styles.background} source={require('../../assets/images/BG.png')}>
        <View style={styles.viewHeader}>
            <Image 
              style={styles.leftArrowIcon}
              source={require('../../assets/icons/left-arrow.png')} />
            <RkText style={styles.headerText}>
                Назад
            </RkText>         
        </View>
       
        <RkAvoidKeyboard style={styles.headerBlock}>
          <RkText style={styles.headerText}>
            Добавьте фото,чтобы увеличить количество откликов (максимум 10)
          </RkText>
          <View style={{flex:1,flexDirection:'row',marginTop:30}}>
          <View style={styles.carouselLeftRight}>
              <Image style={styles.backIcon}
              source={require('../../assets/icons/left-arrow.png')}/> 
            </View >
          <Carousel ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={200}
              itemWidth={100}
              >
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            <Image style={styles.addPhoto}         
                source={require('../../assets/images/addPhoto.png')}/>
            
          </Carousel>
            <View style={styles.carouselLeftRight}>
              <Image  style={styles.backIcon}
              source={require('../../assets/icons/right-arrow.png')}
            />
            </View>
            
            
          </View>
         
        </RkAvoidKeyboard>

         <RkAvoidKeyboard style={styles.authBlock}>
          <View style={styles.authWrap}>
            <Image style={styles.inputIcon}            
                source={require('../../assets/icons/man.png')}
              />
              <TextInput
                style={styles.inputText}
                maxLength={10}
                placeholder="Ваше имя и фамилия"
                placeholderTextColor="#D7D7D7"
              />
          </View>
          
          <View style={styles.authWrap}> 
              <Image
                style={styles.inputIcon}
                source={require('../../assets/icons/edit.png')}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Немного о себе"
                placeholderTextColor="#D7D7D7"
              />
          </View>
        </RkAvoidKeyboard>
          <RkAvoidKeyboard style={styles.buttonBlock}>
            
          <TouchableHighlight
              style={styles.buttonContinue}
               >
            <Text style={styles.buttonText}>
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
  addPhoto:{
    height:100,
    width:100
  },
  headerBlock:{
    flex:1,
    alignItems:'center',
    
    marginTop:70
  },
  headerText:{
    textAlign:'center',
    marginTop:10,  
    fontSize:10,
    color:'#D7D7D7',    
    backgroundColor:'transparent'
  },
  authBlock:{
    flex:1,
    paddingHorizontal:50,
    

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
    marginLeft:10,
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

  headerText:{
    textAlign:'center',
    marginTop:10,  
    fontSize:16,
    color:'#D7D7D7',    
    backgroundColor:'transparent'
  },
  viewHeader:{
    marginTop: 25,
    marginLeft: 10,
    flexDirection: 'row'
  },
  leftArrowIcon:{
    marginTop: 10,
    marginLeft:10,
    width: 20,
    height: 20
  },carouselLeftRight:{
    width:35,
    height:100,
    backgroundColor:'black',
    opacity:0.5,
    marginHorizontal:20

},
      buttonContinue:{
    height:50,
   
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    backgroundColor:"#C0A160"
  },
  buttonText:{
    fontFamily:'Comfortaa-regular',
    fontSize:18,
    color:'#fff'
    
  }, backIcon:{
    marginLeft:10,
    marginTop:40,
    width:20,
    height:20
  },
  buttonBlock:{
    flex:1,
    paddingHorizontal:50,
    justifyContent:'center'
  },
  
}));

