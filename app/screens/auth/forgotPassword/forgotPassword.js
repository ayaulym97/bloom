import React from 'react';

import {View, Image, Header, StyleSheet} from 'react-native'

import {StackNavigator, NavigationActions} from 'react-navigation';

import {confirmNumber} from "./confirmNumber";
import  {resetMain} from "./resetMain"
import {resetPassword} from "./resetPassword";


export const forgotPassword = StackNavigator({
        confirmNumber: {
            screen: confirmNumber,
        },
        resetMain: {
            screen: resetMain,
        },
        resetPassword: {
            screen: resetPassword
        }
    },
    {
        headerMode: 'none'
    }
);
