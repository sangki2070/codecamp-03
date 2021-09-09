import {gql} from "@apollo/client"

export const FETCH_BOARD = gql`

    query fetchBoard($boardId : ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
        }

    }

`

export const DELETE_BOARD = gql `
    mutation deleteBoard($boardId:ID!){
        deleteBoard(boardId:$boardId)}

`

export const FETCH_COMMENTS =gql`

    query fetchBoardComments($boardId:ID!){
    fetchBoardComments(boardId:$boardId){
        writer
        contents
        createdAt
        updatedAt
        _id
        rating
        }
    }


`

