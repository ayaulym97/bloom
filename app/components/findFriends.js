import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {
  RkText,
  RkTheme
} from 'react-native-ui-kitten';

export class FindFriends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let color = {color: this.props.selected ? '#C0A160' : '#999999'};
    let image = this.props.selected
       ? <Image style={styles.authWrapButtonImage} source={require('../assets/icons/services/manicure_gold.png')}/>
       : <Image style={styles.authWrapButtonImage} source={require('../assets/icons/services/manicure_white.png')}/>;
    
    let imagesecond = this.props.selected
       ? <Image style={styles.authWrapButtonImageCheck} source={require('../assets/icons/check.png')}/>
       : null;

    return (
      <TouchableOpacity style={styles.wrapper} onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.text}>
            {image}
            <RkText rkType='header6' style={[color, styles.authWrapButtonText]}>{this.props.text}</RkText>
          </View>
          {imagesecond}
        </View>
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 28,
    borderBottomWidth: 0.5,
    borderBottomColor:'#999999',
    alignSelf: "stretch",
    flexDirection: 'row',
    alignItems: 'center',
  },
  authWrapButtonImage: {
    height: 20,
    width: 20,
  },
  authWrapButtonImageCheck: {
    height: 14,
    width: 14,
  },
  authWrapButtonText: {
    marginLeft: 10,
    fontSize:13,    
    fontFamily:'Comfortaa-regular',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 35
  }
});