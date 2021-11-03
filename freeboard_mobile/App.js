/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {Node} from 'react';
// import {WebView} from 'react-native-webview';
import {Image, View} from 'react-native';

// import Landing from './pages/screens/landing';
// import MyPage from './pages/screens/mypage';
import TabNavigator from './pages/navigation/tabNavigator';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import TopLogo from './src/commons/toplogo';
import BackBtn from './public/navigation/arrow-back.svg';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="tabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
