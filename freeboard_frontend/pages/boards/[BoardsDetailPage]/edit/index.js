// import { useQuery,gql } from "@apollo/client";
// import {useRouter} from "next/router"

import BoardsContainer from "../../../../src/components/units/board/write/BoardsWrite.container";



export default function ModyfiyPage(){

    // const router = useRouter()
    // const { data } =useQuery(FETCH_BOARD,{
    //    variables: {boardId:(router.query.BoardsDetailPage)}
    // })

    return(
        <BoardsContainer isEdit={false} />
    )

}