import { gql } from "@apollo/client";

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $udateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
