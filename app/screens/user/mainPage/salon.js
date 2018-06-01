import React, { Component } from 'react'
import {Text,
        View,
        Image,
        Dimensions,
        Keyboard,
        Button,
        TouchableOpacity,
        ScrollView,TextInput
} from 'react-native';
import {RkButton,
        RkText,
        RkAvoidKeyboard,
        RkStyleSheet,
        RkTheme,
} from 'react-native-ui-kitten';
import Modal from 'react-native-modal'
import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-snap-carousel';
//import {data} from '../../../data';
import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';
const { width } = Dimensions.get('window')

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

export class salon extends React.Component {
    constructor(props){
        super(props);

        //this.data = data.getArticles();
        //this.renderItem = this._renderItem.bind(this);


        this.state={
            isClicked: 1,
            starCount: 0,
            selected: 0,
        }
        this.state = {
            isModalVisible: false
        },

        this.state = {qty: 0};
     }

    onStarRatingPress(rating){
        this.setState({
            starCount: rating
        });
    }
priceDecrease(number){
    if(number-500>0){
        this.setState({
            qty: this.state.qty-500,
        })
    };
}

    toSelectedItems(rating) {
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
            headerTitle: <RkText style={{fontSize:scale(15)}}>МОИ ЗАЯВКИ</RkText>,
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
                    source={require('../../../assets/icons/bullets.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    };
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.setState({ isClicked: 1 })}
                    ><RkText style={(this.state.isClicked== 1) ? styles.headerNameActive:styles.headerName}
                    >Все</RkText></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ isClicked: 2 })}
                    ><RkText  style={(this.state.isClicked== 2) ? styles.headerNameActive:styles.headerName}>Cалоны</RkText></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ isClicked: 3})}
                    ><RkText style={(this.state.isClicked== 3) ? styles.headerNameActive:styles.headerName}
                    >Спецалисты</RkText></TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
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
                        <TouchableOpacity style={styles.button} onPress={this._showModal}>
                            <Text >modal2</Text>
                            <Modal
                                isVisible={this.state.isModalVisible}
                                animationIn={'slideInLeft'}
                                animationOut={'slideOutRight'}>
                                <View style={styles.modal2}>
                                    <View  style={styles.modal2View}>
                                        <Text style={styles.viewTitle1}>У ВАС 0 ОТКЛИКОВ!</Text>
                                        <Text style={styles.viewTitle2}>Увеличьте цену, чтобы быстрее</Text>
                                        <Text style={styles.viewTitle3}>найти салоны</Text>

                                    </View>
                                    <View  style={styles.modal2View2}>
                                        <Text style={styles.orders}>Маникюр - Аппаратный маникюр</Text>
                                        <Text style={styles.orders}>Маникюр - Аппаратный маникюр</Text>
                                        <Text style={styles.orders}>Маникюр - Классический</Text>
                                        <View  style={styles.btnBlock}>
                                            <TouchableOpacity style={styles.btnAddTenge} onPress={() => this.priceDecrease(this.state.qty)}>
                                                <Text style={styles.types}>-500тг</Text>
                                            </TouchableOpacity>
                                            <TextInput
                                                style={styles.priceTxtInput}
                                                value={this.state.qty.toString()}
                                                keyboardType='number-pad'
                                                defaultValue='0'
                                            />
                                            <TouchableOpacity style={styles.btnAddTenge} onPress={() => this.setState({qty: this.state.qty+500})}>
                                                <Text style={styles.types}>+500тг</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View  style={styles.btnBlock2}>
                                            <TouchableOpacity style={styles.lastModalBtns} onPress= {this._hideModal}>
                                                <Text style={styles.types}>Отменить</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.lastModalBtns}>
                                                <Text style={styles.types}>Найти</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>



                                </View>
                            </Modal>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._showModal}>
                            <Text >modal1</Text>
                            <Modal
                                isVisible={this.state.isModalVisible}
                                animationIn={'slideInLeft'}
                                animationOut={'slideOutRight'}>
                                <View style={styles.modal1}>
                                    <Image style={styles.logo} source={require('../../../assets/img/logo.png')}/>
                                    <View style={styles.modal1View1}>
                                        <Text style={styles.saloonName}>"L`oreal Homme"</Text>
                                        <Text style={styles.orderName}>Маникюр - Аппаратный маникюр</Text>
                                        <Text style={styles.address}><Text style={{fontWeight:'bold',fontSize:12}}>Время:</Text>2 Сентября, 12:39</Text>
                                        <Text style={styles.address}><Text style={{fontWeight:'bold',fontSize:12}}>Цена:</Text> 500тг</Text>
                                        <View style={styles.borderLine}></View>
                                    </View>
                                    <Swiper  height={200} loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
                                        <View style={styles.slide1}>
                                            <View style={styles.view}>
                                                <Text style={styles.text}> Оцените оказанную услугу салона для улучшения сервиса!</Text>
                                            </View>
                                            <View style={styles.starView}>
                                                {/*<StarRating*/}
                                                    {/*disabled={false}*/}
                                                    {/*maxStars={5}*/}
                                                    {/*rating={this.state.starCount}*/}
                                                    {/*selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
                                                    {/*starColor={'#EFCE4A'}*/}
                                                    {/*starSize={25}*/}
                                                {/*/>*/}
                                            </View>
                                        </View>
                                        <View style={styles.slide2}>
                                            <View style={styles.commentSlide}>
                                                <TextInput
                                                    style={styles.inputText}

                                                    multiline={true}
                                                    numberOfLines = {4}

                                                    placeholder="Оставьте отзыв о салоне или специалисте"
                                                    placeholderTextColor="#ACACAC"
                                                    underlineColorAndroid="transparent"/>
                                            </View>
                                        </View>
                                    </Swiper>
                                    <TouchableOpacity
                                        style={styles.buttonContinue}
                                        onPress={this.done}
                                    >
                                        <Text style={styles.types} onPress={this._hideModal}>Завершить</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </TouchableOpacity>



                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical:4}}>Рейтинг: </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={5}*/}
                                    {/*rating={this.state.starCount}*/}
                                    {/*selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*starSize={20}*/}
                                {/*/>*/}
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical: 4}}>В Избранное </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={1}*/}
                                    {/*style={{paddingBottom: 20}}*/}
                                    {/*starSize={20}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*rating={this.state.selected}*/}
                                    {/*selectedStar={(rating) => this.toSelectedItems(rating)}*/}
                                {/*/>*/}
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={{width:330, height:100, flexDirection:'row'}}>
                            { this.slides }
                        </View>
                        <RkText style={styles.caption}>Салон красоты "Морковь</RkText>
                        <RkText style={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat enim eget dolor fermentum, sit amet mattis mauris auctor. Donec nunc nulla, porttitor in ultrices quis, mattis non diam. Suspendisse gravida ullamcorper urna vitae congue. Pellentesque a vulputate enim. Sed at faucibus erat, a efficitur mi. Duis sed dui in nunc viverra ultricies vel id urna. Aenean ac nibh erat. In congue est et placerat finibus. Duis laoreet mattis elementum.</RkText>
                        <View style={{flexDirection:'row'}}>
                            <RkText style={{fontSize: scale(11)}}>Адрес: </RkText>
                            <RkText style={{fontSize: scale(11), color: 'gray'}}>ул улица</RkText>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical:4}}>Рейтинг: </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={5}*/}
                                    {/*rating={this.state.starCount}*/}
                                    {/*selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*starSize={20}*/}
                                {/*/>*/}
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical: 4}}>В Избранное </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={1}*/}
                                    {/*style={{paddingBottom: 20}}*/}
                                    {/*starSize={20}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*rating={this.state.selected}*/}
                                    {/*selectedStar={(rating) => this.toSelectedItems(rating)}*/}
                                {/*/>*/}
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={{width:330, height:100, flexDirection:'row'}}>
                            { this.slides }
                        </View>
                        <RkText style={styles.caption}>Салон красоты "Морковь</RkText>
                        <RkText style={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat enim eget dolor fermentum, sit amet mattis mauris auctor. Donec nunc nulla, porttitor in ultrices quis, mattis non diam. Suspendisse gravida ullamcorper urna vitae congue. Pellentesque a vulputate enim. Sed at faucibus erat, a efficitur mi. Duis sed dui in nunc viverra ultricies vel id urna. Aenean ac nibh erat. In congue est et placerat finibus. Duis laoreet mattis elementum.</RkText>
                        <View style={{flexDirection:'row'}}>
                            <RkText style={{fontSize: scale(11)}}>Адрес: </RkText>
                            <RkText style={{fontSize: scale(11), color: 'gray'}}>ул улица</RkText>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical:4}}>Рейтинг: </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={5}*/}
                                    {/*rating={this.state.starCount}*/}
                                    {/*selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*starSize={20}*/}
                                {/*/>*/}
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical: 4}}>В Избранное </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={1}*/}
                                    {/*style={{paddingBottom: 20}}*/}
                                    {/*starSize={20}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*rating={this.state.selected}*/}
                                    {/*selectedStar={(rating) => this.toSelectedItems(rating)}*/}
                                {/*/>*/}
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={{width:330, height:100, flexDirection:'row'}}>
                            { this.slides }
                        </View>
                        <RkText style={styles.caption}>Салон красоты "Морковь</RkText>
                        <RkText style={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat enim eget dolor fermentum, sit amet mattis mauris auctor. Donec nunc nulla, porttitor in ultrices quis, mattis non diam. Suspendisse gravida ullamcorper urna vitae congue. Pellentesque a vulputate enim. Sed at faucibus erat, a efficitur mi. Duis sed dui in nunc viverra ultricies vel id urna. Aenean ac nibh erat. In congue est et placerat finibus. Duis laoreet mattis elementum.</RkText>
                        <View style={{flexDirection:'row'}}>
                            <RkText style={{fontSize: scale(11)}}>Адрес: </RkText>
                            <RkText style={{fontSize: scale(11), color: 'gray'}}>ул улица</RkText>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical:4}}>Рейтинг: </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={5}*/}
                                    {/*rating={this.state.starCount}*/}
                                    {/*selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*starSize={20}*/}
                                {/*/>*/}
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <RkText style={{fontSize: scale(11), paddingVertical: 4}}>В Избранное </RkText>
                                {/*<StarRating*/}
                                    {/*disabled={false}*/}
                                    {/*maxStars={1}*/}
                                    {/*style={{paddingBottom: 20}}*/}
                                    {/*starSize={20}*/}
                                    {/*starColor={'gold'}*/}
                                    {/*rating={this.state.selected}*/}
                                    {/*selectedStar={(rating) => this.toSelectedItems(rating)}*/}
                                {/*/>*/}
                            </View>
                        </View>
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
    header: {
        width: 250  ,
        height: 30,
        paddingTop: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerName: {
        fontSize: scale(14),
        color: 'black'
    },
    headerNameActive: {
        color: '#C0A160',
        fontSize: scale(14)
    },
    card: {
        marginVertical: 10,
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

    },
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    slide1: {
        flex: 1,
        backgroundColor:'white'

    },

    slide2: {
        flex: 1,
        backgroundColor:'white'
    },
    inputText:{
        fontSize:12
    },


    text: {
        marginLeft:100,
        marginTop:20,
        fontSize: 12,
        fontWeight: 'bold'
    },
    view:{
        width:300,
        height:90
    },
    starView:{
        width:150,
        height:50,
        marginLeft:100

    },
    logo:{
        marginTop:20,
        width: 50,
        height: 50,
        marginLeft:150
    },
    modalView:{
        flexDirection: 'row',
    },
    modalIcon:{
        width:20,
        height:22,
        marginRight: 5
    },
    specText: {
        color: 'gray',
        fontSize: 13,
        width: 250
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    modal1:{
        backgroundColor:'black',
        width: 340,
        height: 400,
        backgroundColor: "#fff",
        marginVertical:30,
        justifyContent: 'space-between',

    },
    modal2:{
        backgroundColor:'black',
        width: 330,
        height:320,
        backgroundColor: "#fff",
        marginVertical:30,
        justifyContent: 'space-between',

    },
    saloonName:{
        color:'#157064',
        paddingLeft:20,
        fontSize:16

    },
    address:{

        paddingLeft:20,
        marginTop:5,
        fontSize:12

    },
    buttonContinue: {
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#C0A160',

    },
    btnAddTenge: {

        width:90,
        height:30,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#157064',

    },
    lastModalBtns:{
        width:130,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:'#C0A160',

    },

    types: {
        color: 'white',
        fontFamily:'Comfortaa-regular',
    },
    modal1View1:{
        flex:1,
        flexDirection:'column',
        paddingTop:20,
    },
    orderName:{
        fontWeight:'bold',
        paddingLeft:20,
        fontSize:12
    },borderLine:{
        height:1,
        width:250,
        backgroundColor:'grey'
    },commentSlide:{
        width:300,
        height:100,
        backgroundColor:'#F7F7F7',
        margin:20},
    modal2View:{
        flexDirection:'column',
        marginLeft:60,
        marginTop:20,
        marginRight:30,
        width:230
    },
    viewTitle1:{
        fontSize:16,
        paddingLeft:40
    },
    viewTitle2:{
        fontSize:14,
        paddingTop:10
    },
    viewTitle3:{
        paddingLeft:50

    },modal2View2:{
        flex:1,
        flexDirection:'column',
        marginLeft:30,
        marginTop:20,
        marginRight:20
    },
    orders:{
        fontSize:14,
        paddingLeft:10,
        color:'#C2A162'
    },btnBlock:{
        flex:1,
        flexDirection:'row',
        paddingTop:10
    },btnBlock2:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:20
    },
    priceTxtInput:{
        height: 40,
        width: 90,
        borderWidth: 1,
        borderColor: "#157064",
    },ratingView:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },ratingtext:{
        fontSize: scale(12),
        paddingVertical:3
    }
}));