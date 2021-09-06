import DynamicBoardReadUI from './DynamicBoardRead.present'
import { useQuery  } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from'./DynamicBoardRead.queries'
// import { useState } from'./DynamicBoardRead.styles'


export default function DynamicBoardRead(){

    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    })

    return (
            <DynamicBoardReadUI 
             data ={data}
             router = {router}/>


    )
}