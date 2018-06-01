import React from 'react';

import {View, Image, Header, StyleSheet} from 'react-native'

import {StackNavigator, NavigationActions} from 'react-navigation';

import {registerStep1} from "./registerStep1";
import  {registerStep2} from "./registerStep2";
import {registerStep3} from "./registerStep3";


export const Register = StackNavigator({
        registerStep1: {
            screen: registerStep1
        },
        registerStep2: {
            screen: registerStep2,
        },
        registerStep3: {
            screen: registerStep3
        }
    },
    {
      headerMode: 'none'
    }
    );
