import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight,
    View,
    ScrollView,
    Image,
    Platform,
    StyleSheet
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {
    RkStyleSheet,
    RkText,
    RkTheme
} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/navigation/routes';
import {FontAwesome} from '../../assets/icons';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';


export class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        // функция вызывается при нажатии на элемент меню
        this._navigateAction = this._navigate.bind(this);
    }

    _navigate(route) {
        // ссылка для изучения метода NavigationActions
        // https://reactnavigation.org/docs/navigators/navigation-actions
        // смены сцены на новую сцену без хвостов

        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                // тут происходит переход по нажатому элементу меню
                NavigationActions.navigate({routeName: route.id})

            ]
        });

        // тут исполняется созданная нами функция "resetAction"
        // отправляем в навигацию этот переход
        this.props.navigation.dispatch(resetAction)
    }

    logout = () => {
        this.props.navigation.navigate('Login');
    };

    render() {

        let menu = MainRoutes.map((route, index) => {
            return (
                // рендеринг элементов меню
                <TouchableHighlight
                    style={{height:50, marginLeft:10}}
                    key={route.id}
                    underlayColor={RkTheme.current.colors.button.underlay}
                    activeOpacity={1}
                    onPress={() => this._navigateAction(route)}>
                  <View style={styles.content}>
                    <View style={styles.content}>
                      <RkText style={styles.icon}
                              rkType='moon primary xlarge'>{route.icon}</RkText>
                      <RkText style={{color: 'white', fontSize: scale(16)}}>{route.title}</RkText>
                    </View>
                  </View>
                </TouchableHighlight>
            )
        });

        return (
            <View style={styles.root}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Image source={require('../../assets/img/bg_slider.png')} style={styles.background_image}>
                        <View style={[styles.header]}>
                            <View style={styles.headerBlock}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/img/logo.png')}
                                />
                                <RkText
                                    style={styles.headerText}
                                >
                                    ALLURING. ATTRACTIVE. BLESSFUL
                                </RkText>
                            </View>
                        </View>
                        <RkText style={{paddingLeft:15, color:'white', fontSize: scale(14)}}>Zhaubassar</RkText>
                        <RkText style={{paddingLeft:15, color:'white', fontSize: scale(14)}}>Aruzhan</RkText>
                    </Image>
                    <View style={styles.menu}>
                        {menu}
                    </View>
                    <TouchableOpacity
                        onPress={this.logout}
                    >
                    <View style={styles.footer}>
                        <Image
                            style={{width:18, height:20, marginRight:5}}
                            source={require('../../assets/icons/logout.png')}
                        />
                        <RkText style={{color:'white', fontSize:scale(16)}}>Выйти</RkText>
                    </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    header: {
        height: scale(120),
    },
    background_image: {
        width: null,
        height: 180,
        resizeMode: 'cover',
    },
    root: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: '#157064'
    },
    content: {
        paddingLeft: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon: {
        marginRight: 13,
    },
    headerBlock:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop: 40
    },
    headerText:{
        textAlign:'center',
        marginTop:10,
        color:'#D7D7D7',
        fontSize: scale(10)
    },
    logo:{
        width:42,
        height:40
    },
    menu: {
        top: 50
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'center',
        top: 100
    }
}));