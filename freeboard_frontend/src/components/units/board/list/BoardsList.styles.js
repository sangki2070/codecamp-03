import styled from "@emotion/styled"


// 전체래퍼 부분

export const Wrapper = styled.div`

    width: 1200px;
    /* height: 1847px; */
    top: 717px;
    Left: 360px;
    background-color: #ffffff;
    margin: 100px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

`
// 타이틀 부분


export const ListTitle = styled.div`
    width: 1200px;
    height: 42px;
    font-size: 36px;
    color: #000000;
    text-align: center;

`


// 박스 게시글 부분

export const BoxWrapper = styled.div`

    display: flex;
    justify-content: space-between;
    padding-top: 50px;
`


export const BestBoardsBox = styled.div`

    width:282px;
    height: 257px;
    background-color:#ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const BoxImage = styled.img`

    width:282px;
    height:120px;
    border-radius: 20px 20px 0px 0px;
    
`

export const BoxTitle = styled.div`

    width: 200px;
    height: 27px;
    font-size: 18px;
    padding-left:20px;
    
    
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    
`

export const ProfileWrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:20px;
    padding-right: 20px;
`

export const PhotoWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const WordWrapper = styled.div`
    

`

export const LikeWrapper = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:20px;
    padding-right: 20px;
    padding-bottom: 20px;

`

export const ProfilePhoto = styled.img`
    margin-right: 6px;
    width: 20px;
    height: 20px;

`

export const ProfileName = styled.span`

   
`


export const BoardsDate = styled.div`
    width: 100px;
    height: 18px;
    font-size: 12px;
    color: #828282;
`


export const LikePhoto = styled.img`
    width: 20px;
    height: 18px;    
    
`

export const LikeCount = styled.div`

    width: 27px;
    height: 24px;
    font-size: 16px;
`

// 검색 부분


export const SearchWrapper = styled.div`

    width: 1200px;
    display: flex;
    justify-content: space-between;
    padding-top: 80px;

`

export const SearchArea = styled.input`
    width: 776px;
    height: 52px;
    background-color: #F2F2F2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border:none;

`

export const SearchDate = styled.input`
    width: 244px;
    height: 52px;
    background-color:#FFFFFF;
    border: 1px solid #BDBDBD;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    color: #BDBDBD;
`

export const SearchButton= styled.button`
    width: 94px;
    height: 52px;
    background-color: #000000;
    border-radius: 10px;
    color: #FFFFFF;
`

export const SearchContents = styled.div`

    width: 200px;
    height: 24px;
    size: 16px;
    display: flex;
    align-items: center;
`

export const SearchIcon = styled.img`

    width: 17.49px;
    height: 17.49px;
    margin-right: 10px;

`


// 테이블 부분

export const TableWrapper = styled.div`

    width: 1200px;
    padding-top : 40px;

    

`


// 테이블 헤더부분

export const TableHeader = styled.div`

    display: flex;
    justify-content: space-between;
    padding-left : 40px;
    padding-right: 40px;
    padding-top : 20px;

`

export const TableNumber = styled.div`
    


`


export const TableTitle = styled.div`


`

export const TableWriter = styled.div`



`

export const TableDate = styled.div`



`

export const TableLine = styled.div`

    width: 1200px;
    height: 1px;
    background-color: #000000;

`


export const Row = styled.div`

    display:flex;
    flex-direction: row;
    border-bottom: 1px solid #BDBDBD;
    justify-content: space-between;
    padding-top: 40px;
    padding-left: 50px; 
    

`
export const Column = styled.div`

    width: 20%;
    height: 52px;

    

`


// 푸터 부분

export const FooterPage =styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    align-items : center;

`

export const PageNumber = styled.div`
    display : flex;
`

export const BoardSubmit = styled.img`
    
`

export const LeftMove = styled.img`
    margin-right: 20px;

`

export const Pnumber = styled.img`
    margin-right: 20px;

`

export const RightMove = styled.img`
    margin-right: 400px;

`