import BoardsListUI from "./BoardsList.present"
import {FETCH_BOARDS} from "./BoardsList.queries"
import {useQuery} from "@apollo/client"
import { useRouter } from "next/router"

export default function BoardListContainer(){

    
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARDS)

    function onClickMovetoList(){

        router.push(`/boards/new/`)
    }

    function onClickMovetoBoard(event){

        router.push(`boards/${event.target.id}`)
    }


    return(
        <BoardsListUI 
            data ={data}
            onClickMovetoList={onClickMovetoList}
            onClickMovetoBoard={onClickMovetoBoard}
            />
            
        
    )
}