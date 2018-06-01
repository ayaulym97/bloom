import React from 'react';
import {StackNavigator} from "react-navigation";
import {features} from "./features";
import {calendar} from "./calendar";
import {neworder} from "./neworder"
export const newRequest = StackNavigator({
        Features: {screen: features},
        Calendar: {screen: calendar},
        neworder: {screen: neworder}
    }, {
        headerMode: 'none'
    }
);