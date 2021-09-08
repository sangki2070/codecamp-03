
import ProductReadUI from "./ProductRead.present"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {FETCH_PRODUCT} from "./ProductRead.queries"


export default function ProductRead(){




    const router = useRouter()
    console.log(router.query)
    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId : (router.query.product)
        }
    })


    return(
        <ProductReadUI 
            data = {data}
            router={router}/>
    )


}