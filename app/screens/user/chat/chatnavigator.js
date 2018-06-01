import React from 'react';

import {View, Image, Header} from 'react-native'

import {StackNavigator} from 'react-navigation';

import  { ChatList } from './chatlist';
import { Chat } from './chat';

export const  ChatNavigator = StackNavigator({
        ChatList: {
            screen: ChatList
        },

        Chat: {
            screen: Chat
        },
    },
    {
        headerMode: 'none'
    }
);