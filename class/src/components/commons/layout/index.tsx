import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutSidebar from "./sidebar/LayoutSidebar.container";
import LayoutNav from "./nav/LayoutNav.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div`
  background-color: white;
`;

const SidebarWrapper = styled.div`
  display: flex;
`;

const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다.</Header> */}
      <LayoutHeader />
      <LayoutBanner></LayoutBanner>
      <LayoutNav></LayoutNav>
      <SidebarWrapper>
        <LayoutSidebar></LayoutSidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>

      {!isHiddenFooter && <LayoutFooter />}

      {/* <Footer>여기는 푸터영역 입니다.</Footer> */}
    </Wrapper>
  );
}
