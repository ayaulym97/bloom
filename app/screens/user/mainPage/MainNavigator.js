
import React from 'react';


import { TabNavigator } from "react-navigation";
import {salon} from "./salon";
import {myOrders} from "./myOrders"
// import {createRequest} from './createRequest'

export const MainNavigator = TabNavigator(
    {
        salon: {
            screen: salon,
        },
        //       createReguest: {
        //        screen: createRequest,
        //   },
        myOrders: {
            screen: myOrders
        },
    },
    {
        initialRouteName: "myOrders",
        tabBarPosition: "bottom",
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        order: ["salon", "myOrders"],
        backBehavior: "initialRoute",
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            upperCaseLabel: false,
            scrollEnabled: false,
            activeTintColor: '#C0A160',
        }
    }
);