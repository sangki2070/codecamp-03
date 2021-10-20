import MyMarketContainer from "../../../src/components/units/mypage/mymarket/Mymarkt.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MyMarketPage = () => {
  return <MyMarketContainer />;
};

export default withAuth(MyMarketPage);
