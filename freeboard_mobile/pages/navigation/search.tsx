import React from 'react';

import SearchPage from '../screens/search';

import {createStackNavigator} from '@react-navigation/stack';
import TopLogo from '../../src/commons/toplogo';

const SearchNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="검색"
        component={SearchPage}
        options={{
          title: '',
          headerShown: true,
          headerTitle: () => <TopLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
