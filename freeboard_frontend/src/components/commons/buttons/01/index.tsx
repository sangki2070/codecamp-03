import styled from "@emotion/styled";

const MyButton = styled.button`
  width: 180px;
  height: 52px;
`;

export default function Buttons01(props: any) {
  return <MyButton onClick={props.onClick}>{props.name}</MyButton>;
}
