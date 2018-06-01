import {Icon, FontIcons, manUser, main, chat, faq} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';

import * as myOrders from "../../screens/user/mainPage";
import * as calendar  from "../../screens/user/newRequest";
import * as chaat from "../../screens/user/chat";
import * as fav from "../../screens/user/favourites";

export const MainRoutes = [
    {
        id:'Main',
        title:'Главная',
        icon: main,
        screen:Screens.MainNavigator,
        children: [
            {
                id: 'myOrdersConfirm',
                screen: myOrders.myOrdersConfirm,

            },
            {
                id: 'orderConfirmedSuccessfully',
                screen: myOrders.orderConfirmedSuccessfully,
            },
            {
                id: 'approvedRequest',
                screen: myOrders.approvedRequest,
            },
            {
                id: 'approvedRequestSuccessfully',
                screen: myOrders.approvedRequestSuccessfully,
            },
        ]},
    {id: 'Favourites',
        title: 'Избранные',
        icon: manUser,
        screen: fav.Favourites,
        children: []

    },

    {
    id:'Chat',
    title:'Мои сообщения',
        icon: chat,
        screen: chaat.ChatList,
    children: [
        {
            id: 'Chat',
            screen: chaat.Chat,
        },
    ]
    },
    {
        id:'SalonMain',
        title:'Главная Салон',
        icon: main,
        screen:Screens.salonNavigator,
        children: []
    },

    {
        id: 'Request',
        title: 'Новая заявка',
        icon: chat,
        screen: calendar.features,
        children: [
            {
                id: 'Calendar',
                title: 'Календарь',
                icon: chat,
                screen: calendar.calendar,
                children: []
            },
            {
                id: 'newOrder',
                title: 'На',
                icon: chat,
                screen: calendar.neworder,
                children: []
            }
        ]
    },
    {id: 'Profile',
        title: 'Мой аккаунт',
        icon: manUser,
        screen: Screens.Profile,
        children: []
        // children: [
        //   {
        //     id: 'Login1',
        //     title: 'Login V1',
        //     screen: Screens.LoginV1,
        //     children: []
        //   },
        //   {
        //     id: 'Login2',
        //     title: 'Login V2',
        //     screen: Screens.LoginV2,
        //     children: []
        //   },
        //   {
        //     id: 'SignUp',
        //     title: 'Sign Up',
        //     screen: Screens.SignUp,
        //     children: []
        //   },
        //   {
        //     id: 'password',
        //     title: 'Password Recovery',
        //     screen: Screens.PasswordRecovery,
        //     children: []
        //   },
        // ]
    },
    {
        id: 'Faq',
        title: 'F.A.Q',
        icon: faq,
        screen: Screens.Faq,
        children: []
        // children: [
        //   {
        //     id: 'ProfileV1',
        //     title: 'User Profile V1',
        //     screen: Screens.ProfileV1,
        //     children: []
        //   },
        //   {
        //     id: 'ProfileV2',
        //     title: 'User Profile V2',
        //     screen: Screens.ProfileV2,
        //     children: []
        //   },
        //   {
        //     id: 'ProfileV3',
        //     title: 'User Profile V3',
        //     screen: Screens.ProfileV3,
        //     children: []
        //   },
        //   {
        //     id: 'ProfileSettings',
        //     title: 'Profile Settings',
        //     screen: Screens.ProfileSettings,
        //     children: []
        //   },
        //   {
        //     id: 'Notifications',
        //     title: 'Notifications',
        //     screen: Screens.Notifications,
        //     children: []
        //   },
        //   {
        //     id: 'Contacts',
        //     title: 'Contacts',
        //     screen: Screens.Contacts,
        //     children: []
        //   },
        //   {
        //     id: 'Feed',
        //     title: 'Feed',
        //     screen: Screens.Feed,
        //     children: []
        //   },
        // ]
    },
];

let menuRoutes = _.cloneDeep(MainRoutes);
// menuRoutes.unshift({
//   id: 'GridV2',
//   title: 'Start',
//   screen: Screens.GridV2,
//   children: []
// },);

export const MenuRoutes = menuRoutes;