import React from 'react';

import FavoritePage from '../screens/mypage/favorite';

import {createStackNavigator} from '@react-navigation/stack';
import TopLogo from '../../src/commons/toplogo';

const FavoriteNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="마이 찜"
        component={FavoritePage}
        options={{
          title: '',
          headerShown: true,
          headerTitle: () => <TopLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
