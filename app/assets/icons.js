    import React from 'react';
import {Image, View} from'react-native';

export const FontIcons = {
  login: '',
  navigation: '',
  article: '',
  profile: '',
  mail: '',
  dashboard: '',
  mobile: '',
  other: '',
  theme: '',
  card: '',
};

export const manUser = (
    <View style={{height:25, width:20}}>
  <Image style={{height:20, width:14, marginVertical:3}} source={require('./icons/man-user.png')}/>
    </View>
);
export const main = (
    <View style={{height:25, width:20, }}>
<Image style={{height:16, width:20, marginVertical:4}} source={require('./icons/home-2.png')}/>
</View>
);
export const chat = (
    <View style={{height:25, width:20}}>
      <Image style={{height:16, width:20, marginVertical:4}} source={require('./icons/message.png')}/>
    </View>
);
export const faq = (
    <View style={{height:25, width:25}}>
      <Image style={{height:20, width:14, marginVertical:3}} source={require('./icons/faq.png')}/>
    </View>
);


export const FontAwesome = {
  heart: String.fromCharCode(61444),
  comment: String.fromCharCode(61669),
  user: String.fromCharCode(62144),
  twitter: String.fromCharCode(61593),
  google: String.fromCharCode(61856),
  facebook: String.fromCharCode(61594),
  plus: String.fromCharCode(61543),
  search: String.fromCharCode(61442),
  smile: String.fromCharCode(61720),
  chevronRight: String.fromCharCode(61524),
  chevronLeft: String.fromCharCode(61700),
  bars: String.fromCharCode(611641),
  slashEye: String.fromCharCode(611552),
  github: String.fromCharCode(61595),
};