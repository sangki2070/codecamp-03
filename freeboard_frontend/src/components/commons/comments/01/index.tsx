import styled from "@emotion/styled";

export const WriteWrapper = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const WriteArea = styled.textarea`
  width: 1198px;
  height: 108px;
  resize: none;
  border: 1px solid #f2f2f2;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 16px;
  color: #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
  }
`;

export const BottomWrapper = styled.div`
  width: 1198px;
  height: 52px;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

export const BottomWord = styled.div`
  width: 100px;
  height: 24px;
  color: #bdbdbd;
`;

export const BottomBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export default function Comments01() {
  return (
    <WriteWrapper>
      <WriteArea placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 민형사상 책임은 게시자에게 있습니다."></WriteArea>
      <BottomWrapper>
        <BottomWord>0/100</BottomWord>
        <BottomBtn>문의하기</BottomBtn>
      </BottomWrapper>
    </WriteWrapper>
  );
}
