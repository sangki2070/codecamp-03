import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div``;

export const BoardsWrapper = styled.div`
  width: 1200px;
  /* height: 1562px; */
  background-color: #ffffff;
  margin: 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding-top: 18px;
  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
`;

// 헤더 타이틀 부분

export const BoardsHeader = styled.div`
  width: 996px;
  /* height: 150px; */
  /* background-color: red; */
  /* padding-bottom: 200px; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const LeftTitle = styled.div`
  width: 448px;
  height: 120px;
  display: flex;
  align-items: center;
`;

export const TitleImage = styled.div`
  width: 47px;
  height: 47px;
  background-image: url("/images/Profile.png");
  margin-right: 25px;
`;

export const TitleDate = styled.div`
  font-size: 16px;
  width: 130px;
  height: 24px;
  color: #828282;
  vertical-align: center;
`;

export const TitleName = styled.div`
  width: 200px;
  height: 36px;
  font-size: 22px;
  color: #000000;
  vertical-align: center;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: center;
`;

export const RightTitle = styled.div`
  width: 448px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  /* align-items: center; */
  /* justify-content: flex-end; */
`;
export const Clip = styled.div`
  width: 27px;
  height: 14px;
  background-image: url("/images/Clip.png");
`;

export const Location = styled.div`
  width: 20px;
  height: 27px;
  background-image: url("/images/Location.png");
  margin-left: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
// export const Triangle = styled.div`
//   width: 0px;
//   height: 0px;
//   border-bottom: 15px solid transparent;
//   border-right: 15px solid #898989;
//   /* width: 12px;
//     height: 8px;
//     transform: rotate(-180deg); */
//   /* background-color: #C4C4C4; */
// `;

export const WordWrapper = styled.div`
  width: 376px;
  height: 64px;
  background-color: #898989;
  font-size: 16px;
  color: #ffffff;
  padding: 5px;
`;
export const UnderLine = styled.div`
  width: 996px;
  height: 1px;
  background-color: #bdbdbd;
`;

// 게시글 메인 부분

export const BodyWrapper = styled.div`
  width: 996px;
  /* height: 1200px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BodyTitle = styled.div`
  width: 500px;
  height: 54px;
  font-size: 36px;
  padding-top: 40px;
  padding-bottom: 80px;
`;

export const BodyImage = styled.img`
  width: 996px;
  height: 480px;
  padding-top: 40px;
`;

export const BodyContents = styled.div`
  width: 996px;
  height: 96px;
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const YoutubeWrapper = styled.div`
  width: 480px;
  height: 240px;
  padding-bottom: 120px;
`;

export const BodyVideo = styled(ReactPlayer)``;

export const CenterContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`;

export const BodyFooterLike = styled.div`
  width: 996px;
  /* height: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding-bottom: 40px;
`;

export const BodyLike = styled.div`
  width: 100px;
  text-align: center;
  color: #ffd600;
  padding-top: 20px;
`;

export const BodyDisLike = styled.div`
  width: 100px;
  text-align: center;
  color: #828282;
  padding-top: 20px;
`;

export const LikeImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/like.png");
`;

export const DislikeImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/dislike.png");
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DisLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* 버튼 래퍼부분 */

export const BtnWrapper = styled.div`
  padding-top: 40px;
  width: 1200px;
  margin: 100px;
  display: flex;
  justify-content: center;
`;

export const ListBtn = styled.img`
  margin-right: 40px;
`;

export const ModyfiyBtn = styled.img`
  margin-left: 40px;
`;

export const DeleteBtn = styled.img`
  margin-left: 40px;
`;

/* 댓글작성 부분 */
