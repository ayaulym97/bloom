import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Accordion from 'react-native-accordion';

const ANSWER = 'Чтобы узнать, какой салон откликнулся на вашу заявку - нужно перейти на главную страницу, и нажать на кнопку “список” в правом углу. Вы увидите все свои заявки и откливнувшихся салонов.';


const CONTENT = [
    {
        title: 'Что это за приложение?',
        content: ANSWER,
    },
    {
        title: 'Как узнать какой салон откликнулся на мою заявку?',
        content: ANSWER,
    },
    {
        title: 'Как связаться с салоном ?',
        content: ANSWER,
    },
    {
        title: 'Смогу ли я поменять номер телефона в случае необходимости?',
        content: ANSWER,
    },
    {
        title: 'На что обращать внимание при выборе услуги?',
        content: ANSWER,
    },
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',

    },
    title: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#D7D7D7',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 14,
        fontWeight: '500',
        paddingRight: 30
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',

    },
    inactive: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    iconStyle:{
        width: 20,
        height:20,
        justifyContent: 'flex-end'

    }

});

export class Faq extends  React.Component{
    state = {
        activeSection: false,
        collapsed: true,
    };

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    _setSection(section) {
        this.setState({ activeSection: section });
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive] } transition="backgroundColor">
                <View style={{flex:1,flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={styles.headerText}>{section.title}</Text>

                    <Image
                        style={styles.iconStyle}
                        resizeMode={"contain"}
                        source={isActive ? require('../../../assets/icons/expand-close.png'):require('../../../assets/icons/expand.png')}
                    />
                </View>

            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={false}>

                    {/* <TouchableHighlight onPress={this._toggleExpanded}>
                     <View style={styles.header}>
                     <Text style={styles.headerText}>Single Collapsible</Text>
                     </View>
                     </TouchableHighlight>
                     <Collapsible collapsed={this.state.collapsed} align="center">
                     <View style={styles.content}>
                     <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
                     </View>
                     </Collapsible> */}

                    <Accordion
                        activeSection={this.state.activeSection}
                        sections={CONTENT}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        duration={400}
                        onChange={this._setSection.bind(this)}
                    />

                </ScrollView>
            </View>
        );
    }
}
Faq.navigationOptions = () => {
    return({
        headerTitle: <Text >F.A.Q</Text>,
        headerRight: <TouchableOpacity>
            <Image style={{marginRight:15}} source={require('../../../assets/icons/notification.png')}/>
        </TouchableOpacity>
    })
};

