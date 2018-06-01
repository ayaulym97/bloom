import React from 'react';
import {RkStyleSheet, RkText} from "react-native-ui-kitten";
import {scale} from "../../../utils/scale";
import {Text, View, ScrollView} from "react-native";
import moment from "moment";
import Button from 'react-native-button';
import {Calendar, LocaleConfig} from "react-native-calendars";


LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг','Сент','Окт.','Ноя.','Дек.'],
    dayNames: ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    dayNamesShort: ['Вос','Пон','Вт','Ср','Чет','Пят','Суб']
};

LocaleConfig.defaultLocale = 'ru';

export class calendar extends  React.Component{constructor(props) {
    super(props);
    this.timeDay = {
        morning: ["09:00","10:00","11:00","12:00"],
        lunch: ["13:00", "14:00", "15:00", "16:00", "17:00"],
        evening: ["18:00","19:00","20:00","21:00","22:00"]
    };
    this.state = {
        choosenTime: null
    };
    this.onDayPress = this.onDayPress.bind(this);
    }
    chooseTimeSeason(item){
        console.log(item, "ITEM");
        this.setState({
            choosenTime: item
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContent}>
                <View style={styles.progressView}>
                </View>
                <Text style={styles.contentText}>
                    Выберите дату и время для оказания услуги
                </Text>
                <ScrollView style={styles.container}>
                    <Calendar
                        onDayPress={this.onDayPress}
                        hideExtraDays
                        markedDates={{[this.state.selected]: {selected: true}}}
                        firstDay={1}
                        theme={{
                            textSectionTitleColor: 'black',
                            selectedDayBackgroundColor: '#C3A162',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#C3A162',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            arrowColor: 'gray',
                            monthTextColor: 'gray',
                            textDayFontFamily: 'Comfortaa-Bold',
                            textMonthFontFamily: 'Comfortaa-Light',
                            textDayHeaderFontFamily: 'Comfortaa-Light',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 12,
                        }}
                    />
                    <View style={styles.bottomsContent}>
                        <View style={styles.timeDayContent}>
                           <Text style={styles.daySeason}>
                               УТРО
                           </Text>
                            <View style={styles.timeDayContentInside}>
                            {
                                this.timeDay.morning.map((item) =>
                                    <Button onPress={()=>this.chooseTimeSeason(item)}>
                                        <Text style={(item=== this.state.choosenTime)?styles.timeSeasonActive:styles.timeSeason}>
                                        {item}
                                    </Text>
                                </Button>
                                )
                            }
                            </View>
                        </View>
                        <View style={styles.timeDayContent}>
                            <Text style={styles.daySeason}>
                                ДЕНЬ
                            </Text>
                            <View style={styles.timeDayContentInside}>
                                {
                                    this.timeDay.lunch.map((item) =>
                                        <Button onPress={()=>this.chooseTimeSeason(item)}>
                                            <Text style={(item=== this.state.choosenTime)?styles.timeSeasonActive:styles.timeSeason}>
                                            {item}
                                            </Text>
                                        </Button>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.timeDayContent}>
                            <Text style={styles.daySeason}>
                                ВЕЧЕР
                            </Text>
                            <View style={styles.timeDayContentInside}>
                                {
                                    this.timeDay.evening.map((item) =>
                                        <Button onPress={()=>this.chooseTimeSeason(item)}>
                                            <Text style={(item=== this.state.choosenTime)?styles.timeSeasonActive:styles.timeSeason}>
                                                {item}
                                            </Text>
                                        </Button>
                                    )
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomContent}>
                    <Button
                        onPress={()=>{
                            navigate('neworder')
                        }}
                        style={styles.nextButton}
                        color="white">
                        Далее
                    </Button>
                </View>
            </View>
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }
}

const styles= RkStyleSheet.create(theme=>({
    mainContent:{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    contentText:{
        marginTop: scale(10),
        marginHorizontal: scale(20),
        textAlign: 'center',
        fontSize: scale(16),
        color: '#000000',
        fontFamily: 'Comfortaa-Bold'
    },
    progressView:{
        width: '66%',
        height: 5,
        backgroundColor: '#147063'
    },
    bottomsContent:{
        flexDirection: 'column',
        paddingHorizontal: scale(10)
    },
    timeDayContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: scale(1),
        height: scale(25)
    },
    timeDayContentInside:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    daySeason:{
        fontFamily: 'Comfortaa-Bold',
        fontSize: scale(15),
        marginLeft: scale(5),
        justifyContent: 'center',
        padding: scale(5)
    },
    timeSeason:{
        width: scale(40),
        fontFamily: 'Comfortaa-Bold',
        borderWidth: 1,
        borderRadius: 3,
        padding: scale(2),
        margin: scale(4),
        fontSize: scale(13),
        textAlign: 'center'
    },
    timeSeasonActive:{
        width: scale(40),
        fontFamily: 'Comfortaa-Bold',
        borderWidth: 1,
        backgroundColor: "#C3A162",
        color: "white",
        borderRadius: 3,
        padding: scale(2),
        margin: scale(4),
        fontSize: scale(13),
        textAlign: 'center'
    },
    nextButton:{
        borderRadius: 4,
        width: scale(170),
        fontSize: scale(17),
        paddingVertical: scale(6),
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily:'Comfortaa-Bold',
        backgroundColor: '#147063'
    },
    bottomContent:{
        height: 50,
        textAlign: 'center',
        justifyContent: 'center'
    },
}));