import styled from "@emotion/styled";

import LayoutHeader from "./layout/header/LayoutHeader.container";
import LayoutNav from "./layout/nav/LayoutNav.container";
import LayoutFooter from "./layout/footer/LayoutFooter.container";
import LayoutMenuPage from "./layout/menu/LayoutMenu.container";
import LayoutMarketPage from "./layout/market/LayoutMarket.container";
import LayoutSidebar from "./layout/sidebar/LayoutSidebar.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #1e222d; */
`;

const SidebarWrapper = styled.div`
  display: flex;
`;

export default function Layout(props) {
  const HIDDEN_MYPAGE = ["/mypages"];
  const router = useRouter();
  const isHiddenMypages = HIDDEN_MYPAGE.includes(router.pathname);

  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      <LayoutNav></LayoutNav>
      <LayoutMarketPage></LayoutMarketPage>
      <LayoutMenuPage></LayoutMenuPage>
      <SidebarWrapper>
        {isHiddenMypages && <LayoutSidebar></LayoutSidebar>}
        <Body>{props.children}</Body>
      </SidebarWrapper>
      <LayoutFooter></LayoutFooter>
    </Wrapper>
  );
}
