import React from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    Modal,
    ListView,
    TouchableOpacity
} from 'react-native';

import {
    RkText,
    RkAvoidKeyboard,
    RkStyleSheet,
} from 'react-native-ui-kitten';

import MapView from 'react-native-maps';


import { scale, scaleModerate, scaleVertical } from '../../../../utils/scale';

const styles = RkStyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        width: null,
        height: null
    },
    header: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center'
    },
    headerText: {
        color: '#D7D7D7',
        fontSize: 20
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 20
    },
    mapContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
        paddingHorizontal: 60
    },
    mapText: {
        color: '#D7D7D7',
        fontSize: 20,
        marginBottom: 30
    },
    inputWrap: {
        marginVertical: 5,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D7D7D7'
    },
    icon: {
        marginHorizontal: 10,
        width: 25,
        height: 25
    },
    getCity: {
        flex: 1,
        paddingHorizontal: 4,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    inputField: {
        color: '#D7D7D7',
        fontSize: 16,
        flex: 1
    },
    text: {
        color: '#D7D7D7',
        fontSize: 16,

    },
    buttonBlock: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'center'
    },
    buttonLogin: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: "#C0A160"
    },
    buttonText: {
        fontFamily: 'Comfortaa-regular',
        color: '#fff',
        fontSize: 18
    },
    mapView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    map:{
        width:150,
        height:150
    }
})


export class AddLocation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            city: 'Aлматы'
        };
        this.renderRow = this._renderRow.bind(this);
    }

    // componentDidMount() {
    //     return fetch('http://icaretest.westus.cloudapp.azure.com/api/cities/', {
    //         method: "GET"
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: ds.cloneWithRows(responseJson),
    //             }, function () {
    //                 // do something with new state
    //             });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _renderRow(row) {
        let name = `${row.name}`;
        return (
            <TouchableOpacity
                style={styles.cityBlock}
                onPress={() => {

                    this.setModalVisible(!this.state.modalVisible)
                }}
            >
                <View style={styles.container}>
                    <RkText>{name}</RkText>
                </View>
            </TouchableOpacity >
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../../../../assets/images/BG.png')}
                >
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { alert("Modal has been closed.") }}
                    >
                        <View style={styles.modal}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}
                            >
                                <View style={styles.header}>
                                    <Image
                                        source={require('../../../../assets/icons/left-arrow.png')}
                                        style={styles.icon} />
                                    <RkText
                                        style={styles.headerText}>
                                        Назад
                                </RkText>
                                </View>

                            </TouchableHighlight>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => this._renderRow(rowData)}
                            />

                        </View>
                    </Modal>
                    <RkAvoidKeyboard style={styles.container}>
                        <View style={styles.header}>
                            <Image
                                source={require('../../../../assets/icons/left-arrow.png')}
                                style={styles.icon} />
                            <RkText
                                style={styles.headerText}>
                                Назад
                           </RkText>
                        </View>
                        <View
                            style={styles.mapContainer}
                        >
                            <RkText
                                style={styles.mapText}
                            >
                                Ваше местоположение
                            </RkText>
                            <View
                                style={styles.inputWrap}
                            >
                                <Image
                                    style={styles.icon}
                                    source={require('../../../../assets/icons/placeholder.png')}
                                />
                                <TouchableOpacity
                                    style={styles.getCity}
                                    onPress={() => {
                                        this.setModalVisible(true)
                                    }}
                                >
                                    <Text
                                        style={styles.text}
                                    >{this.state.city}</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.inputWrap}
                            >
                                <Image
                                    style={styles.icon}
                                    source={require('../../../../assets/icons/street.png')}
                                />
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Введите вашу улицу"
                                    placeholderTextColor='#D7D7D7'
                                    underlineColorAndroid='transparent'
                                />
                            </View>


                        </View>
                        <View style={styles.mapView}>
                            <MapView
                                style={styles.map}

                                initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                                }}
                            />
                        </View>

                        <View style={styles.buttonBlock}>
                            <TouchableOpacity
                                style={styles.buttonLogin}
                                onPress={this.login}

                            >
                                <Text
                                    style={styles.buttonText}
                                >

                                    Продолжить
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </RkAvoidKeyboard>
                </Image>
            </View >
        )
    }
}
