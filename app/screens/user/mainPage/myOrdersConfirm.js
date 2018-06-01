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

import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-snap-carousel';
//import {data} from '../../../data';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(100);
const itemHorizontalMargin = wp(2)  ;

export const sliderWidth = viewportWidth;

const entryBorderRadius = 8;

export class myOrdersConfirm extends  React.Component{
    constructor(props){
        super(props);

        this.state={
            isClicked: 1,
            starCount: 0,
            selected: 0
        }
    }

    onStarRatingPress(rating){
        this.setState({
            starCount: rating
        });
    }
    toSelectedItems(rating){
        if(this.state.selected == 0){
            this.setState({
                selected: 1
            });
        }else{
            this.setState({
                selected: 0
            });
        }
    }

    // _keyExtractor(post, index) {
    //     return post.id;
    // }


    get slides () {
        return (
            <Carousel
                sliderWidth={sliderWidth}
                // itemWidth={itemWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={2500}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={false}
            >
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}  style={styles.salonImages}/>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}  style={styles.salonImages}/>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}  style={styles.salonImages}/>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}  style={styles.salonImages}/>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}  style={styles.salonImages}/>
            </Carousel>
        );
    }
    static navigationOptions = () => {
        return({
            headerTitle: <RkText style={{fontSize:scale(15)}}>САЛОНЫ ГОРОДА</RkText>,
            headerRight: <TouchableOpacity
                onPress={() => this.navigate('Notification', {name: 'Lucy'})}
            >
                <Image
                    style={{width:25, height:25, marginRight:5}}
                    source={require('../../../assets/icons/notification.png')}
                />

            </TouchableOpacity>,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/brochure-folded.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    };

    render() {
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={{marginVertical:10}}>
                    <View style={styles.card}>
                        <View style={{width:330, height:100, flexDirection:'row'}}>
                            { this.slides }
                        </View>
                        <RkText style={styles.caption}>Салон красоты "heyhey"</RkText>
                        <RkText style={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat enim eget dolor fermentum, sit amet mattis mauris auctor. Donec nunc nulla, porttitor in ultrices quis, mattis non diam. Suspendisse gravida ullamcorper urna vitae congue. Pellentesque a vulputate enim. Sed at faucibus erat, a efficitur mi. Duis sed dui in nunc viverra ultricies vel id urna. Aenean ac nibh erat. In congue est et placerat finibus. Duis laoreet mattis elementum.</RkText>
                        <View style={{flexDirection:'row'}}>
                            <RkText style={{fontSize: scale(11)}}>Адрес: </RkText>
                            <RkText style={{fontSize: scale(11), color: 'gray'}}>ул улица</RkText>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical:4}}>Рейтинг: </RkText>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    starColor={'gold'}
                                    starSize={20}
                                />
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical: 4}}>В Избранное </RkText>
                                <StarRating
                                    disabled={false}
                                    maxStars={1}
                                    style={{paddingBottom: 20}}
                                    starSize={20}
                                    starColor={'gold'}
                                    rating={this.state.selected}
                                    selectedStar={(rating) => this.toSelectedItems(rating)}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{height: 35,backgroundColor:'#C0A160',borderRadius:4}}
                                      onPress={() => this.props.navigation.navigate('orderConfirmedSuccessfully')}

                    >
                        <RkText style={{color:'white', textAlign:'center', paddingVertical:10, fontSize:scale(16)}}>ПОДТВЕРДИТЬ</RkText>
                    </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        )

    }

    //
    // render(){
    //     let info = {};
    //     info.item = this.dats[0];
    //     return(
    //         <FlatList data={this.data}
    //                   renderItem={this.renderItem}
    //                   keyExtractor={this._keyExtractor}
    //         />
    //
    //     )
    // }
}
let styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    card: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 230 ,
        width: 350,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 3,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 0.3,
        paddingBottom: 2,
    },
    caption: {
        fontSize: scale(13),
        color: '#157064'
    },
    description: {
        fontSize: scale(12),
        color: 'gray',
        height: 40
    },
    contentContainer: {
        justifyContent: 'center',
        marginHorizontal: 14
    },
    icon:{
        width: 25,
        height: 25
    },
    salonImages:{
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 0.3,
        marginHorizontal: 5,
        marginVertical: 5,
        width:100,
        height:100,
        borderRadius: 4,

    }
}));