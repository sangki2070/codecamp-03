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

export default function TodayProductsUI(props: any) {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(String(localStorage.getItem("baskets"))) || [];
    setBasketItems(items);

    console.log(basketItems);
  }, []);

  return (
    <TodayProductsWrapper>
      <TodayWrapper>
        <TodayTitle>오늘의 상품</TodayTitle>
        {basketItems
          ?.map((el: any) => (
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
                <TodayProductsName>
                  {el.name.length > 9 ? `${el.name.substr(0, 10)}...` : el.name}
                </TodayProductsName>
                <TodayProductsRemarks>{el.remarks}</TodayProductsRemarks>
                <TodayProductsPrice>
                  {Number(el.price).toLocaleString("ko-KR")} 원
                </TodayProductsPrice>
                <TodayProductsTag>{el.tags}</TodayProductsTag>
              </TodayWordWrapper>
            </TodayProductsArea>
          ))
          .reverse()}
      </TodayWrapper>
    </TodayProductsWrapper>
  );
}
