import React, { Component } from 'react';
import {
  View,
  Text  
} from 'react-native';

import {
    // выплывающее меню с левой стороны конец
  DrawerNavigator,
    // дефолтный переход с одной сцены на другую сцену
  StackNavigator
    // вся навигация в реакте импортируется с react-navigation
} from 'react-navigation';

// стили которые предлогает нам ui-kitten
import {withRkTheme} from 'react-native-ui-kitten';

// задает стили своим компонентам перед инициализацией
import {bootstrap} from './config/bootstrap';

// добавляет google analytics --- надо узнать что конкретно делает
// import track from './config/analytics';

bootstrap();

// навигация с приложении
import {AppRoutes} from './config/navigation/routesBuilder';


import * as Screens from './screens';


function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];

  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

let SideMenu = withRkTheme(Screens.SideMenu);

const Bloom = StackNavigator({
  Login:{
    screen:Screens.Login
  },
  Register:{
    screen:Screens.Register
  },
  ForgotPassword:{
      screen:Screens.forgotPassword
  },
  Home: {
    screen: DrawerNavigator({
        ...AppRoutes,
      },
      {
        contentComponent: (props) => <SideMenu {...props}/>
      })
  }
}, {
    headerMode: 'none',
});

export default () => (
    // наше главное приложение
  <Bloom
      // функция выполняется каждый раз когда меняется сцена
    onNavigationStateChange={(prevState, currentState) => {

      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);

    }}
  />
);
