import React from 'react';

import MainPage from '../screens/main';

import {createStackNavigator} from '@react-navigation/stack';
import TopLogo from '../../src/commons/toplogo';

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="홈"
        component={MainPage}
        options={{
          title: '',
          headerShown: true,
          headerTitle: () => <TopLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
