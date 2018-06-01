
import { TabNavigator } from "react-navigation";
import {Requests} from "./userRequests";
import {confirmRequests} from "./confirmRequests"
export const salonNavigator = TabNavigator(
    {
        allRequests: {
            screen: Requests,
        },
        confirmRequests: {
            screen: confirmRequests,
        }



    },
    {

        initialRouteName: "allRequests",
        tabBarPosition: "bottom",
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
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