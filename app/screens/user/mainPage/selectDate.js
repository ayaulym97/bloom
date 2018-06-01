import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

import {FontAwesome} from '../../../assets/icons';
import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';


export class myOrders extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            isClicked: 1,
            starCount: 0
        }
    }
    onStarRatingPress(rating){
        this.setState({
            starCount: rating
        });
    }
    static navigationOptions = () => {
        return({
            headerTitle: <RkText style={{fontSize:scale(15)}}>МОИ ЗАЯВКИ</RkText>,
            headerRight: <TouchableOpacity
            >
               <RkText>Отменить</RkText>

            </TouchableOpacity>,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/bullets.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    };
    render(){
        return(
            <View style={styles.container}></View>
        )
    }
}
let styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    icon: {
        height:25,
        width: 25
    },
}));