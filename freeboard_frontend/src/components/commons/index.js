import styled from "@emotion/styled";

import LayoutHeader from "./layout/header/LayoutHeader.container";
import LayoutNav from "./layout/nav/LayoutNav.container";
import LayoutFooter from "./layout/footer/LayoutFooter.container";

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
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </Wrapper>
  );
}
