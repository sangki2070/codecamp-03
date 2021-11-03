import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  MyPageView,
  MyPageText,
  CartButton,
  ModifyButton,
  FavoriteButton,
} from './MyPage.styles';

const MyPageUI = () => {
  const navigation = useNavigation();
  return (
    <MyPageView>
      <MyPageText>MyPages.....</MyPageText>
      <>
        <>
          <CartButton
            title={'장바구니 이동..'}
            onPress={() => navigation.navigate('장바구니 페이지')}
          />
        </>
        <>
          <ModifyButton
            title={'내정보수정 이동..'}
            onPress={() => navigation.navigate('수정하기 페이지')}
          />
        </>

        <>
          <FavoriteButton
            title={'마이찜 이동..'}
            onPress={() => navigation.navigate('마이찜 페이지')}
          />
        </>
      </>
    </MyPageView>
  );
};

export default MyPageUI;
