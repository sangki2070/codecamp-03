// import { MyButton } from "./Myform.styles";
import Button01 from "../../commons/buttons/01/Button.01";
import Input01 from "../../commons/inputs/01/Input.01";

export default function MyFormUi(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>리액트 훅 폼 연습!!</div>
      이메일 : <Input01 type="text" register={props.register("myEmail")} />
      <div>{props.formState.errors.myEmail?.message}</div>
      비밀번호 :{" "}
      <Input01 type="password" register={props.register("myPassword")} />
      <div>{props.formState.errors.myPassword?.message}</div>
      <Button01
        type="submit"
        isValid={props.formState.isValid}
        name="로그인하기"
      >
        로그인하기
      </Button01>
    </form>
  );
}
