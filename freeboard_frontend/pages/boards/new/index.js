import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'


import{ WrapperForm, 
        FormTitle, 
        AttachmentForm, 
        BodyHeader,
        Label, 
        BodyHeaderLeft, 
        WriteForm1, 
        WriteForm2, 
        WriteForm3, 
        WriteFrom4,  
        PasswordForm, 
        BodyHeaderRight, 
        BodyTitle, 
        BodyContent, 
        AddressForm, 
        AddressButton,
        SearchWrapper,
        YoutubeForm, 
        AttachmentBtn, 
        Upload, 
        AttachmentWrapper, 
        RadioForm, 
        RadioButton, 
        RadionWrapper,
        FooterWrapper, 
        FooterBtn1,
        FooterBtn2,
        ErrorMassage} from'../../../styles/Enrollment.js'



const CREATE_BOARD = gql `


mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(
    createBoardInput:$createBoardInput
    ){
        _id
    }
}

    # mutation createBoard($createBoardInput:CreateBoardInput!){
    #     createBoard(
    #         createBoardInput:$createBoardInput
    #         ){
    #         _id
    #         }
    #     }
`




export default function BoardsNewPage(){


    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [title, setTitle]=useState("")
    const [contents, setContents]=useState("")

    const [zipCode, setZipCode]=useState("")
    const [adressSubmit, setAdressSubmit]=useState("")
    const [adressDetail, setAdressDetail]=useState("")
    const [youtubeSubmit, setYoutubeSubmit]=useState("")


    const [nameError, setnameError]=useState("")
    const [passwordError, setpasswordError]=useState("")
    const [contentsError, setcontentsError]=useState("")
    const [titleError, settitleError]=useState("")

    

    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeName(event){
        setName(event.target.value)
        if(event.target.value !== ""){
            setnameError("")
        }
    }

    function onChangePassword(event){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setpasswordError("")
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            settitleError("")
        }
    }

    function onChangeZipcode(event){
        setZipCode(event.target.value)
    }

    function onChangeAdressSubmit(event){
        setAdressSubmit(event.target.value)
    }
    
    function onChangeAdressDetail(event){
        setAdressDetail(event.target.value)
    }

    function onChangeYoutubeSubmit(event){
        setYoutubeSubmit(event.target.value)
    }


    function onChangeContents(event){
        setContents(event.target.value)
    }

    async function onClickRegister(){
        if(name === ""){
            setnameError("이름을 작성해 주세요")
        }
        if(password === ""){
            setpasswordError("비밀번호를 작성해 주세요")
        }
        if(title === ""){
            settitleError("제목을 작성해 주세요")
        }
        if(contents === ""){
            setcontentsError("내용을 작성해 주세요")
        }

        if(name !== "" && password !=="" && title !== "" && contents !== ""){
            alert("게시물을 등록합니다.")
        }

        const result = await createBoard({
            variables: 
            {   
                createBoardInput : {
                    writer:name,
                    password:password,
                    title:title,
                    contents:contents,
                    youtubeUrl:youtubeSubmit,
                    boardAddress:{
                        zipcode:zipCode,
                        address:adressSubmit,
                        addressDetail:adressDetail
                        }
                }
                
            }

        })
        console.log(result.data.createBoard._id)
    }

    return (
        <WrapperForm>
            <FormTitle>
                게시물등록
            </FormTitle>

            <BodyHeader>
                <BodyHeaderLeft>
                    <Label>작성자</Label>
                    <WriteForm1 type="text" placeholder="이름을 적어주세요" onChange={onChangeName}></WriteForm1>
                    <ErrorMassage>{nameError}</ErrorMassage>
                </BodyHeaderLeft>
                <BodyHeaderRight>
                    <Label>비밀번호</Label>
                    <PasswordForm type="password" placeholder="비밀번호를 적어주세요" onChange={onChangePassword}></PasswordForm>
                    <ErrorMassage>{passwordError}</ErrorMassage>
                </BodyHeaderRight>
            </BodyHeader>

            <BodyTitle>
                <Label>제목</Label>
                <WriteForm2 type="text" placeholder="제목을 적어주세요." onChange = {onChangeTitle}></WriteForm2>
                <ErrorMassage>{titleError}</ErrorMassage>
            </BodyTitle>

            <BodyContent>
                <Label>내용</Label>
                <WriteForm3 type="text area" placeholder="내용을 입력해주세요." onChange={onChangeContents}></WriteForm3>
                <ErrorMassage>{contentsError}</ErrorMassage>
            </BodyContent>            

            <AddressForm>
                <Label>주소</Label>
                <SearchWrapper>
                    <WriteFrom4 type="text" placeholder="017250" onChange={onChangeZipcode}></WriteFrom4>
                    <AddressButton>우편번호 검색</AddressButton>
                </SearchWrapper>
                <WriteForm2 type="text" onChange={onChangeAdressSubmit}></WriteForm2>
                <WriteForm2 type="text" onChange={onChangeAdressDetail}></WriteForm2>         
            </AddressForm>

            <YoutubeForm>
                <Label>유튜브부분</Label>
                <WriteForm2 type="text" placeholder="링크를 복사해주세요." onChange={onChangeYoutubeSubmit}></WriteForm2>
            </YoutubeForm>

            <AttachmentForm>
                <Label>사진 첨부</Label>
                <AttachmentWrapper>
                    <AttachmentBtn>
                        + <Upload>Upload</Upload>
                    </AttachmentBtn>
                    <AttachmentBtn>
                        + <Upload>Upload</Upload>
                    </AttachmentBtn>
                    <AttachmentBtn>
                        + <Upload>Upload</Upload>
                    </AttachmentBtn>
                </AttachmentWrapper>
            </AttachmentForm>


            <RadioForm>
                <Label>메인 설정</Label>
                <RadionWrapper>    
                <RadioButton type="radio" checked="checked" name="setting"></RadioButton> 유튜브
                <RadioButton type="radio" name="setting"></RadioButton> 사진
                </RadionWrapper>
            </RadioForm>

            <FooterWrapper>
                <FooterBtn1 onClick={onClickRegister}>등록하기</FooterBtn1>
                <FooterBtn2>취소하기</FooterBtn2>
            </FooterWrapper>

        </WrapperForm>
    )
}


