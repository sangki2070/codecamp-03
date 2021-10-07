import styled from "@emotion/styled";

const TextArea01 = styled.textarea`
  width: 996px;
  height: 320px;
  padding: 15px;
  margin-bottom: 40px;
`;

export default function Textarea01(props) {
  return <TextArea01 {...props.register} placeholder={props.name} />;
}
