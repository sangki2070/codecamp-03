import { withAuth } from "../src/components/commons/hocs/withAuth";

const HocPage1 = () => {
  return <div>HOC 연습 페이지 testtest</div>;
};

export default withAuth(HocPage1);
