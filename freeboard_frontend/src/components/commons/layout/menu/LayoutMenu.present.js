import { Wrapper, MenuItem } from "./LayoutMenu.styles";

export default function LayoutMenuUI() {
  return (
    <Wrapper>
      <MenuItem>홈</MenuItem>
      <> | </>
      <MenuItem>수익률 게시판</MenuItem>
      <> | </>
      <MenuItem>마이페이지</MenuItem>
    </Wrapper>
  );
}
