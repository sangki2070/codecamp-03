import { Wrapper, MenuItem } from "./LayoutMenu.styles";

export default function LayoutMenuUI(props) {
  return (
    <Wrapper>
      <MenuItem id="/" onClick={props.onClickMenu}>
        홈
      </MenuItem>
      <> | </>
      <MenuItem id="/boards/currency" onClick={props.onClickMenu}>
        환율정보 게시판
      </MenuItem>
      <> | </>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        수익률 게시판
      </MenuItem>
      <> | </>
      <MenuItem id="/" onClick={props.onClickMenu}>
        마이페이지
      </MenuItem>
    </Wrapper>
  );
}
