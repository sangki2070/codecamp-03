import { withAuth } from "../quiz/src/components/commons/hocs/withAuth";

const HocPage = () => {
  // accessToken이 있는가?
  // accessToken이 없다면, login 페이지로 보내기!!!

  return <div>HOC 연습 페이지 입니다.!!!</div>;
};

export default withAuth(HocPage);
