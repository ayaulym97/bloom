

import React, {Component} from 'react';
// import { ArticleList } from 'react-native-uikit';
import {
  View,
  ListView,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
var array = ["Superman ","Batman ","Wonder Woman ","The Flash ","Aquaman ","Green Lantern "];
//var array1=["отправил вам личное сообщение","откликнулся на вашу заявку. Посмотрите ее сейчас!","принял(а) вашу заявку. Посмотрите ее сейчас!","откликнулся на вашу заявку. Посмотрите ее сейчас!"];
export class notification extends React.Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(array)
    }
  }

  renderRow(rowData, sectionID, rowID) {
 	return (
    	<TouchableHighlight underlayColor='#dddddd' style={{height:70,backgroundColor:'white'}}>
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1,flexDirection:'row',marginTop:20}}>
                <Image style={{marginLeft:20}} source={require('../../../assets/icons/email_green.png')} />
                <View style={{marginLeft:10}}>
                <Text style={{fontSize: 12}} numberOfLines={2}><Text style={{fontSize: 12, color: '#157064'}}>{rowData}</Text> отправил вам личное сообщение</Text>
                <Text style={{fontSize: 10,paddingTop:10,color:'#787878'}} >1 Сентябрь, 11:34</Text>
                </View>
            </View>
            <View style={{height: 1,marginHorizontal:20, backgroundColor: '#dddddd'}}/>
        </View>
    	</TouchableHighlight>
  );
}

  render() {

    return(
    //     <ArticleList
    //     headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
    //     items={[
    //       {id:0, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/798466'},
    //       {id:1, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/311112'},
    //       {id:2, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/D4BB69'},
    //       {id:3, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/ABB2B8'},
    //       {id:4, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/798466'},
    //       {id:5, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/919888'},
    //     ]}
    //     footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
    //     onPress={(id) => console.log(id)}
    //   />
      <ListView 
      dataSource={this.state.dataSource} 
      renderRow={this.renderRow.bind(this)}
      style={{backgroundColor:'white'}}>
      </ListView>
    );
  }
}
notification.navigationOptions = () => {
    return({
        headerTitle: <Text>УВЕДОМЛЕНИЯ</Text>,
        
    })
};

// import React from 'react';
// import {
//     View,
//     Image,
//     Dimensions,
//     Keyboard,
//     Text,
//     Button
// } from 'react-native';

// import {
//     RkButton,
//     RkText,
//     RkTextInput,
//     RkAvoidKeyboard,
//     RkStyleSheet,
//     RkTheme
// } from 'react-native-ui-kitten';

// import {FontAwesome} from '../../../assets/icons';
// import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


// export class notification extends  React.Component{

//     render(){
//         return (
//             <View>
//                 <Text>
// lxkvlkx
//                 </Text>
//             </View>
//         )
//     }
// }
// import React, { Component } from "react";
// import { View, Text, FlatList, ActivityIndicator } from "react-native";
// import { List, ListItem, SearchBar } from "react-native-elements";
// import {FontAwesome} from '../../../assets/icons';
// export class notification extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       data: [],
//       page: 1,
//       seed: 1,
//       error: null,
//       refreshing: false
//     };
//   }

//   componentDidMount() {
//     this.makeRemoteRequest();
//   }

//   makeRemoteRequest = () => {
//     const { page, seed } = this.state;
//     const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
//     this.setState({ loading: true });

//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: page === 1 ? res.results : [...this.state.data, ...res.results],
//           error: res.error || null,
//           loading: false,
//           refreshing: false
//         });
//       })
//       .catch(error => {
//         this.setState({ error, loading: false });
//       });
//   };

//   handleRefresh = () => {
//     this.setState(
//       {
//         page: 1,
//         seed: this.state.seed + 1,
//         refreshing: true
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   handleLoadMore = () => {
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "86%",
//           backgroundColor: "#CED0CE",
//           marginLeft: "14%"
//         }}
//       />
//     );
//   };

//   renderHeader = () => {
//     return <SearchBar placeholder="Type Here..." lightTheme round />;
//   };

//   renderFooter = () => {
//     if (!this.state.loading) return null;

//     return (
//       <View
//         style={{
//           paddingVertical: 20,
//           borderTopWidth: 1,
//           borderColor: "#CED0CE"
//         }}
//       >
//         <ActivityIndicator animating size="large" />
//       </View>
//     );
//   };

//   render() {
//     return (
//       <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//             <ListItem
//               roundAvatar
//               title={`${item.name.first} ${item.name.last}`}
//               subtitle={item.email}
//               avatar={{ uri: item.picture.thumbnail }}
//               containerStyle={{ borderBottomWidth: 0 }}
//             />
//           )}
//           keyExtractor={item => item.email}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//           ListFooterComponent={this.renderFooter}
//           onRefresh={this.handleRefresh}
//           refreshing={this.state.refreshing}
//           onEndReached={this.handleLoadMore}
//           onEndReachedThreshold={50}
//         />
//       </List>
//     );
//   }
// }