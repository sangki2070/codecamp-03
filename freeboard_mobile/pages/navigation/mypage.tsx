import React from 'react';

import MyPage from '../screens/mypage';

import CartPage from '../screens/mypage/cart';
import FavoritePage from '../screens/mypage/favorite';
import ModifyPage from '../screens/mypage/modify';
import {Image, StyleSheet, View} from 'react-native';

import TopLogo from '../../src/commons/toplogo';
import TopLogo2 from '../../src/commons/toplogo2';

import {createStackNavigator} from '@react-navigation/stack';
import styled from '@emotion/native';

const MyPageNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          title: '',

          headerShown: true,
          headerTitle: () => <TopLogo />,
          headerTintColor: '#e24e4a',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="장바구니 페이지"
        component={CartPage}
        options={{
          headerShown: true,
          headerTitle: () => <TopLogo2 />,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="마이찜 페이지"
        component={FavoritePage}
        options={{
          headerShown: true,
          headerTitle: () => <TopLogo2 />,

          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="수정하기 페이지"
        component={ModifyPage}
        options={{
          headerShown: true,
          headerTitle: () => <TopLogo2 />,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
