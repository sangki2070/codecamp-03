import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import MainNavigator from './main';
import SearchNavigator from './search';
import MyPageNavigator from './mypage';
import FavoriteNavigator from './favorite';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === '검색') {
            iconName = focused ? (
              <Image
                source={require('../../public/navigation/meetings-on.png')}
              />
            ) : (
              <Image
                source={require('../../public/navigation/meetings-off.png')}
              />
            );
          } else if (route.name === '홈') {
            iconName = focused ? (
              <Image source={require('../../public/navigation/map-on.png')} />
            ) : (
              <Image source={require('../../public/navigation/map-off.png')} />
            );
          } else if (route.name === '마이 찜') {
            iconName = focused ? (
              <Image
                source={require('../../public/navigation/chatting-on.png')}
              />
            ) : (
              <Image
                source={require('../../public/navigation/chatting-off.png')}
              />
            );
          } else if (route.name === '마이페이지') {
            iconName = focused ? (
              <Image
                source={require('../../public/navigation/mypage-on.png')}
              />
            ) : (
              <Image
                source={require('../../public/navigation/mypage-off.png')}
              />
            );
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E24E4A',
        inactiveTintColor: '#bdbdbd',
      }}>
      <Tab.Group screenOptions={{headerShown: false}}>
        <Tab.Screen name="검색" component={SearchNavigator} />
        <Tab.Screen name="홈" component={MainNavigator} />
        <Tab.Screen name="마이 찜" component={FavoriteNavigator} />
        <Tab.Screen name="마이페이지" component={MyPageNavigator} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;
