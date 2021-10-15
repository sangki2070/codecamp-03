import styled from "@emotion/styled";

const CommentsAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

const ProfileArea = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const CommentsName = styled.div`
  width: 45px;
  height: 24px;
  font-size: 16px;
`;

const CommentsContents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

const CommentDate = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

const ProfileMainWrapper = styled.div`
  width: 1094px;
  height: 117px;
  margin-left: 100px;
  display: flex;
  margin-top: 30px;
`;

export default function Profile01(props) {
  return (
    <>
      {props.reData?.fetchUseditemQuestionAnswers.map((el) => (
        <ProfileMainWrapper key={el._id}>
          <CommentsAvatar src={"/images/productsavatar.svg"}></CommentsAvatar>
          <ProfileArea>
            <CommentsName>{el.user.name}</CommentsName>
            <CommentsContents>{el.contents}</CommentsContents>
            <CommentDate>date : </CommentDate>
          </ProfileArea>
        </ProfileMainWrapper>
      ))}
    </>
  );
}
