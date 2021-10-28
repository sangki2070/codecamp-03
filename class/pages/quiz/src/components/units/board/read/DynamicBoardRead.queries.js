import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`

    query fetchboard($number : Int){
        fetchBoard(number : $number){
            writer
            title
            contents
        }
    }

`