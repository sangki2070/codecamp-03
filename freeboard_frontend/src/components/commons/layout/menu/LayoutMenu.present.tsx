import { Wrapper, MenuItem } from "./LayoutMenu.styles";

export default function LayoutMenuUI(props: any) {
  return (
    <Wrapper>
      <MenuItem id="/" onClick={props.onClickMenu}>
        홈
      </MenuItem>
      <> | </>
      <MenuItem onClick={props.onClickMarket}>NFT 마켓</MenuItem>
      <> | </>
      <MenuItem id="/boards/currency" onClick={props.onClickMenu}>
        환율정보
      </MenuItem>
      <> | </>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        수익률 게시판
      </MenuItem>
      <> | </>
      <MenuItem id="/mypages/market" onClick={props.onClickMypage}>
        마이페이지
      </MenuItem>
    </Wrapper>
  );
}
