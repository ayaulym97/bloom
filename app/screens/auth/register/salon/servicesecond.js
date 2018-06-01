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
  FlatList
} from 'react-native';
import {
  RkText,
  RkButton,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';

import ModalDropdown from 'react-native-modal-dropdown';
import Accordion from 'react-native-accordion';

export class Servicesecond extends React.Component {

  constructor(props) {
    super(props);
    this.rows = []

    this.state = {
      first: false,
      second: false,
      third: false,
      fourth: false,

      dataSource: ([
        {key: 'Ресницы', child: [{child1 : 'xz'}, {child2: 'xzxz'}]},
        {key: 'Ресницыsd', child: [{child1 : 'xz'}, {child2: 'xzxz'}]},
        {key: 'Ресницыs', child: [{child1 : 'xz'}, {child2: 'xzxz'}]}
      ]),
    }
  }

  // _renderItem = ({item}) => {

  //   console.log(item);
  //   let {width} = Dimensions.get('window');
  //   return (
  //     <ModalDropdown options={['Ресницы', 'Ресницы']} animated={false} style={styles.dropdown}>
  //       <Text>
  //         {item.text}
  //       </Text>
  //     </ModalDropdown>
  //   );

  // };

  _renderRow = ({item}) => {
    let header = (
      <View>
        <Text>Click to Expand</Text>
      </View>
    );
 
    let content = (
      <View>
        <Text>This content is hidden in the accordion</Text>
      </View>
    );
 
    return (
      <Accordion
        header={header}
        content={content}
        easing="easeOutCubic"
      />
    );
  }

  render() {
    let {width} = Dimensions.get('window');
    let items = this.props.children;
    
    return (
      <View style={styles.container}>
        <RkAvoidKeyboard style={styles.headerBlock}>
            <RkText
              style={styles.headerTitle}
            >
              Выберите типы услуг
            </RkText>
             <RkText
              style={styles.headerSubtitle}
            >
              Укажите те типы услуг, которые вы предоставляете
            </RkText>
        </RkAvoidKeyboard>
        <RkAvoidKeyboard style={styles.authBlock}>
          <View style={styles.authWrap}>
             <FlatList
              style={styles.list}
              data={this.state.dataSource}
              ref = {(ref) => {this.flatlistref = ref; }}
              onMomentumScrollEnd={this.onScrollEnd}
              pagingEnabled={true}
              vertical
              renderSeparator={() => null}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              directionalLockEnabled
              renderItem={this._renderRow}>

            </FlatList> 
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
  list: {
    flex:1,
    backgroundColor: 'green',
    alignSelf: 'stretch',
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
  },
  dropdown: {
    flex: 1,
    backgroundColor: 'yellow',
  }
}));