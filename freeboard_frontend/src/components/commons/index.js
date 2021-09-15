import styled from "@emotion/styled";

import LayoutHeader from "./layout/header/LayoutHeader.container";
import LayoutNav from "./layout/nav/LayoutNav.container";
import LayoutFooter from "./layout/footer/LayoutFooter.container";

const Wrapper = styled.div``;

const Body = styled.div``;

const NavWrapper = styled.div`
  display: flex;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      <NavWrapper>
        <LayoutNav></LayoutNav>
        <Body>{props.children}</Body>
      </NavWrapper>
      <LayoutFooter></LayoutFooter>
    </Wrapper>
  );
}
