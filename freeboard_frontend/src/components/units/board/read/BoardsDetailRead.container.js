import BoardsDetailUI from "./BoardsDetailRead.present"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {FETCH_BOARD} from "./BoardsDetailRead.queries"


export default function BoardsDetialContainerPage(){

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{
        variables: {
            boardId:(router.query.BoardsDetailPage)
        }
    })

    return(
        <BoardsDetailUI 
            data ={data}
            router = {router}
        />
    )

}