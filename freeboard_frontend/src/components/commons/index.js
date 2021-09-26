import styled from "@emotion/styled";

import LayoutHeader from "./layout/header/LayoutHeader.container";
import LayoutNav from "./layout/nav/LayoutNav.container";
import LayoutFooter from "./layout/footer/LayoutFooter.container";
import LayoutMenuPage from "./layout/menu/LayoutMenu.container";
import LayoutMarketPage from "./layout/market/LayoutMarket.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_MAIN = ["/lending"];

export default function Layout(props) {
  const router = useRouter;
  const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);
  return (
    <Wrapper>
      {isHiddenMain && <LayoutHeader></LayoutHeader>}
      {isHiddenMain && <LayoutNav></LayoutNav>}
      {isHiddenMain && <LayoutMarketPage></LayoutMarketPage>}
      {isHiddenMain && <LayoutMenuPage></LayoutMenuPage>}
      <Body>{props.children}</Body>
      {isHiddenMain && <LayoutFooter></LayoutFooter>}
    </Wrapper>
  );
}
