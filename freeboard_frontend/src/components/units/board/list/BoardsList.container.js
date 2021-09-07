import BoardsListUI from "./BoardsList.present"
import {FETCH_BOARDS} from "./BoardsList.queries"
import {useQuery} from "@apollo/client"

export default function BoardListContainer(){

    const {data} = useQuery(FETCH_BOARDS)

    


    return(
        <BoardsListUI 
            data ={data}
            />
            
        
    )
}