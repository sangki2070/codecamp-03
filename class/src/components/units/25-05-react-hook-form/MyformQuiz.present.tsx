import Input02 from "../../commons/inputs/02/Input.02";
import Textarea01 from "../../commons/textarea/01/Textarea.01";
import ErrorMessages01 from "../../commons/errormessages/01/ErrorMessages.01";

export default function MyFormQuizUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <div>리액트 훅 폼 게시글 연습!!!</div>
      작성자 : <Input02 type="text" register={props.register("myWriter")} />
      <ErrorMessages01 name={props.formState.errors.myWriter?.message} />
      비밀번호 :
      <Input02 type="password" register={props.register("myPassword")} />
      <ErrorMessages01
        name={props.formState.errors.myPassword?.message}
      ></ErrorMessages01>
      제목 : <Input02 type="text" register={props.register("myTitle")} />
      <ErrorMessages01
        name={props.formState.errors.myPassword?.message}
      ></ErrorMessages01>
      내용 : <Textarea01 register={props.register("myContents")} />
      <ErrorMessages01
        name={props.formState.errors.myPassword?.message}
      ></ErrorMessages01>
      <button type="submit" name="게시글 등록하기">
        게시물 등록하기
      </button>
    </form>
  );
}
