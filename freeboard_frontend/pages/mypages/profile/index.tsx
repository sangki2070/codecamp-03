import MyProfileContainer from "../../../src/components/units/mypage/myprofile/MyProfile.container";

import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MyPointPage = () => {
  return <MyProfileContainer />;
};

export default withAuth(MyPointPage);
