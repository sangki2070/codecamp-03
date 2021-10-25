import styled from "@emotion/styled";

const WriteInput = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 40px;
`;

export default function Input02(props: any) {
  console.log("3123123", props.fetchData?.fetchUseditem);

  return (
    <WriteInput
      type={props.type}
      {...props.register}
      placeholder={props.name}
      defaultValue={props.defaultValue}
    />
  );
}
