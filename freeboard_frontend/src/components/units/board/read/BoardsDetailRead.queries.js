import {gql} from "@apollo/client"

export const FETCH_BOARD = gql`

    query fetchBoard($boardId : ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
        }

    }

`

export const DELETE_BOARD = gql `
    mutation deleteBoard($deleteBoard:ID!){
        deleteBoard(deleteBoard:$deleteBoard)}

`