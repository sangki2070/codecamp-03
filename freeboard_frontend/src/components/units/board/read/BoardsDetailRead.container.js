import BoardsDetailUI from "./BoardsDetailRead.present"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {FETCH_BOARD} from "./BoardsDetailRead.queries"
import {useMutation} from "@apollo/client"
import {DELETE_BOARD} from "./BoardsDetailRead.queries"

export default function BoardsDetialContainerPage(){

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{
        variables: {
            boardId:(router.query.BoardsDetailPage)
        }
    })

    async function onClickDelete(event){
        
        await deleteBoard({
            variables: {boardId : event.target.id},
            refetchQueries: [{query: FETCH_BOARD}]
        })
    }

    return(
        <BoardsDetailUI 
            data ={data}
            router = {router}
            onClickDelete={onClickDelete}
        />
    )

}