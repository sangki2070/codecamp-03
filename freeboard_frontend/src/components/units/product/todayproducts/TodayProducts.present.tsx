import {
  TodayProductsWrapper,
  TodayWrapper,
  TodayTitle,
  TodayProductsArea,
  PickArea,
  PickImage,
  PickCount,
  TodayImage,
  TodayImageWrapper,
  TodayProductsName,
  TodayProductsRemarks,
  TodayProductsPrice,
  TodayProductsTag,
  TodayWordWrapper,
} from "./TodayProducts.styles";

import { useState, useEffect } from "react";

export default function TodayProductsUI(props) {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItems(items);

    console.log(basketItems);
  }, []);

  return (
    <TodayProductsWrapper>
      <TodayWrapper>
        <TodayTitle>오늘의 상품</TodayTitle>
        {basketItems
          ?.map((el) => (
            <TodayProductsArea
              key={el._id}
              onClick={props.onClickMovetoToday(el)}
            >
              <PickArea>
                <PickImage src={"/images/productsheart.svg"}></PickImage>
                <PickCount>{el.pickedCount}</PickCount>
              </PickArea>
              <TodayImageWrapper>
                <TodayImage src={"/images/noimage3.svg"}></TodayImage>
              </TodayImageWrapper>
              <TodayWordWrapper>
                <TodayProductsName>{el.name}</TodayProductsName>
                <TodayProductsRemarks>2019 LTE 32GB</TodayProductsRemarks>
                <TodayProductsPrice>{el.price} 원</TodayProductsPrice>
                <TodayProductsTag>#삼성전자 #갤럭시탭 #갓성비</TodayProductsTag>
              </TodayWordWrapper>
            </TodayProductsArea>
          ))
          .reverse()}
      </TodayWrapper>
    </TodayProductsWrapper>
  );
}
