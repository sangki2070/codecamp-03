import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {MainView, TestText, TestButton} from './Landing.styles';

const LandingUI = ({}) => {
  const navigation = useNavigation();

  return (
    <MainView>
      <TestText>aaa</TestText>
      <TestButton
        title="Go to MyPage"
        onPress={() => navigation.navigate('MyPages')}
      />
    </MainView>
  );
};

export default LandingUI;
