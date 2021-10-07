import styled from "@emotion/styled";

const ErrorMessage = styled.div`
  color: red;
`;

export default function ErrorMessages01(props) {
  return <ErrorMessage {...props.register}> {props.name}</ErrorMessage>;
}
