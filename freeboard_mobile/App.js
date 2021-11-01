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
import {View, Text, Button} from 'react-native';

import Landing from './pages/screens';
import MyPage from './pages/screens/mypages';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const App: () => Node = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={Landing}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="MyPages"
          component={MyPage}
          options={{title: 'MyPage'}}
        />
      </Stack.Navigator>
      <Button
        title="Go to MyPage"
        onPress={() => navigation.navigate('MyPages')}
      />
    </NavigationContainer>
  );
};

export default App;
