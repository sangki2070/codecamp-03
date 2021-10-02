import styled from "@emotion/styled";

import LayoutHeader from "./layout/header/LayoutHeader.container";
import LayoutNav from "./layout/nav/LayoutNav.container";
import LayoutFooter from "./layout/footer/LayoutFooter.container";
import LayoutMenuPage from "./layout/menu/LayoutMenu.container";
import LayoutMarketPage from "./layout/market/LayoutMarket.container";

const Wrapper = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      <LayoutNav></LayoutNav>
      <LayoutMarketPage></LayoutMarketPage>
      <LayoutMenuPage></LayoutMenuPage>
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </Wrapper>
  );
}
