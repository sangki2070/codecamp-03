import MyPointContainer from "../../../src/components/units/mypage/mypoint/MyPoint.container";

import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MyPointPage = () => {
  return <MyPointContainer />;
};

export default withAuth(MyPointPage);
