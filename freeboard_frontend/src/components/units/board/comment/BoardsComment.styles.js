import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 1200px;
  margin: 100px;
  background-color: beige;
`;

export const CommentTitleWrapper = styled.div`
  display: flex;
`;

export const StarWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
`;

export const CommentTitle = styled.div``;

export const CommentStar = styled.img`
  padding-left: 5px;
`;

export const CommentInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
  color: #828282;
  font-size: 16px;
  margin-right: 30px;
`;

export const CommentImage = styled.img``;

/* 댓글 박스 */

export const CommentBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
`;

export const WriteArea = styled.textarea`
  width: 1197px;
  height: 108px;
  padding-left: 20px;
  padding-top: 20px;
  border: 1px solid #bdbdbd;
  border: none;
  resize: none;
`;

export const InputArea = styled.div`
  width: 1200px;
  height: 52px;
  color: #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
`;

export const TextCount = styled.div`
  width: 43px;
  height: 24px;
  size: 16px;
`;

export const CommentSumbmit = styled.button`
  width: 91px;
  height: 52px;
  padding: 14px 16px;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  size: 16px;
`;

/* 댓글 노출영역 */

export const CommentArea = styled.div`
  width: 1200px;
  background-color: red;
`;

export const Row = styled.div`
  width: 1200px;
`;

export const Column = styled.div`
  width: 1200px;
`;
