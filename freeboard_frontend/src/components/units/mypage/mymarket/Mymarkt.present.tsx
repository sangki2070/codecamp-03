import {
  MyMarketPageWrapper,
  MyProducts,
  MyFavorite,
  MainWrapper,
  SearchArea,
  SearchButton,
  SearchWrapper,
  TopWrapper,
} from "./Mymarkt.styles";

import Table05 from "../../../commons/table/05";
import Table06 from "../../../commons/table/06";

export default function MyMarketUI(props) {
  return (
    <MyMarketPageWrapper>
      <TopWrapper>
        <div>
          <MyProducts onClick={props.onClickIsMarket}>나의상품</MyProducts>
          <> | </>
          <MyFavorite onClick={props.onClickFavorite}>마이 찜</MyFavorite>
        </div>

        <SearchWrapper>
          <SearchArea placeholder="검색어를 입력해 주세요"></SearchArea>
          <SearchButton>검색</SearchButton>
        </SearchWrapper>
      </TopWrapper>

      <MainWrapper>
        {props.isMarket && <Table05 data1={props.data1}></Table05>}
        {!props.isMarket && <Table06 data2={props.data2}></Table06>}
      </MainWrapper>
    </MyMarketPageWrapper>
  );
}
