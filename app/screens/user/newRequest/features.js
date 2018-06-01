import React from 'react';

import {RkText, RkStyleSheet, } from 'react-native-ui-kitten';
import Button from 'react-native-button';
import {TouchableOpacity, Image, View, Text, Alert, ScrollView} from "react-native";
import {scale} from "../../../utils/scale";
import _remove from 'lodash/remove';


export class features extends  React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeParentFeature: null,
            features: [],
            selectedChilds: [],
            selectedFeatures: [],
        };

        this.parentFeaturesList = this.getFeatures();

        this.parentFeaturesList.then((listFeature)=> {
            this.setState({
                features: listFeature
            })
        });
    }

    getFeatures(){
        return fetch('http://bloomserver.northeurope.cloudapp.azure.com/api/feature/',
            {method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response)=>{
            return response.json();
        }, (error)=>{
            Alert.alert("Networking Error!")
        });
    }

    static navigationOptions = () => {
        return({
            headerTitle: <RkText>Новая заявка</RkText>,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../../assets/icons/brochure-folded.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    };

    childFeatureAdd(item){
        let stateFeatures = this.state.selectedFeatures;
        if(stateFeatures.includes(item.id)){
            _remove(stateFeatures, (id)=>{
                return id === item.id
            });
        }else{
            if(stateFeatures.length < 3){
                stateFeatures.push(item.id)
            }
        }
        this.setState({
            selectedFeatures: stateFeatures
        });
        console.log(this.state.selectedFeatures, "FEATURES SELECTED")
    }

    chooseFeature(item){
        this.setState({
            activeParentFeature: item.id,
            selectedChilds: item.children
        });
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <View style={styles.progressView}>
                </View>
                <View style={styles.contentHeader}>
                    <View>
                        <Text style={styles.contentText}>
                            Выберите вид услуги, по которой
                            хотите создать заявку
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.contentSelected}>
                            Вы выбрали <Text style={styles.contentBolderText}>{this.state.selectedFeatures.length}/3</Text>
                        </Text>
                    </View>

                    <View style={styles.centerFeatures}>
                        <ScrollView
                            style={styles.leftSideFeature}
                            showsVerticalScrollIndicator={false}>
                            {
                                this.state.features.map((item) =>
                                    <Button onPress={() => this.chooseFeature(item)} style={styles.featureList}>
                                        <Text
                                            style={(this.state.activeParentFeature === item.id ) ? styles.contentFeatureActive : styles.contentFeature}>
                                            {item.name}
                                        </Text>
                                    </Button>
                                )
                            }

                        </ScrollView>
                        <ScrollView style={styles.rightSideFeature}>
                            {
                                (this.state.selectedChilds.length === 0)?
                                    <Text style={styles.childFeatures}>
                                        Ничего не выбрано
                                    </Text>:
                                    this.state.selectedChilds.map((item) =>
                                        <Button
                                            onPress={()=>this.childFeatureAdd(item)}>
                                            <Text style={(this.state.selectedFeatures.includes(item.id))?styles.childFeaturesActive:styles.childFeatures}>
                                                {item.name}
                                            </Text>
                                        </Button>
                                    )

                            }
                        </ScrollView>
                    </View>
                    <View style={styles.bottomContent}>
                        <Button
                            onPress={()=>{
                                navigate('Calendar')
                            }}
                            style={styles.nextButton}
                            color="white">
                            Далее
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    mainView:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    progressView:{
        width: '33%',
        height: 5,
        backgroundColor: '#147063'
    },
    topBarButton:{
        fontSize: scale(10),
        flex: 1,
        justifyContent: 'center',
        color: '#000000',
        fontFamily: 'Comfortaa-Bold'
    },
    contentHeader:{
        paddingTop: scale(10),
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    contentText:{
        marginTop: scale(10),
        textAlign: 'center',
        fontSize: scale(16),
        color: '#000000',
        fontFamily: 'Comfortaa-Bold'

    },
    contentBolderText:{
        fontWeight: 'bold',
        color: '#000000'
    },
    contentSelected:{
        marginTop: scale(10),
        fontSize: scale(17),
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Comfortaa-Bold'
    },

    centerFeatures:{
        height:'100%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        marginTop: scale(10),
        borderBottomColor: '#147063',
        borderBottomWidth: scale(0.3),
        borderTopColor: '#147063',
        borderTopWidth: scale(0.3)
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
    leftSideFeature:{
        flexDirection: 'column',
        width: '42%',
        height: '100%',
    },
    rightSideFeature:{
        width: '58%',
        height: '100%',
        flexDirection: 'column'
    },
    contentFeature:{
        backgroundColor: '#ECF5F4',
        width: '100%',
        borderBottomWidth: scale(0.5),
        borderBottomColor: '#147063',
        paddingVertical: scale(13),
        textAlign: 'center',
        fontSize: scale(14),
        fontFamily:'Comfortaa-Light',
        color: 'black',
        justifyContent: 'center',
    },
    contentFeatureActive:{
        backgroundColor: 'white',
        width: '100%',
        borderBottomWidth: scale(0.5),
        borderBottomColor: '#147063',
        paddingVertical: scale(13),
        textAlign: 'center',
        fontSize: scale(14),
        fontFamily:'Comfortaa-Light',
        color: 'black',
        justifyContent: 'center',
    },
    childFeatures:{
        width: '100%',
        paddingVertical: scale(10),
        textAlign: 'center',
        fontSize: scale(14),
        fontFamily:'Comfortaa-Light',
        color: 'black',
        justifyContent: 'center',
    },
    childFeaturesActive:{
        width: '100%',
        paddingVertical: scale(10),
        textAlign: 'center',
        fontSize: scale(14),
        fontFamily:'Comfortaa-Light',
        color: 'orange',
        justifyContent: 'center',
    }
}));

