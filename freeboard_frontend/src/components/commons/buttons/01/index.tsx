import styled from "@emotion/styled";

const MyButton = styled.button`
  width: 180px;
  height: 52px;
`;

export default function Buttons01(props) {
  return <MyButton onClick={props.onClick}>{props.name}</MyButton>;
}
