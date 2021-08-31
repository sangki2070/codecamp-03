import { useState } from 'react'

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


export default function BoardsNewPage(){


    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [title, setTitle]=useState("")
    const [contents, setContents]=useState("")
    const [nameError, setnameError]=useState("")
    const [passwordError, setpasswordError]=useState("")
    const [contentsError, setcontentsError]=useState("")
    const [titleError, settitleError]=useState("")

    function onChangeName(event){
        setName(event.target.value)
    }

    // function onChangePassword(event){
    //     setPassword(event.target.value)
    // }

    // function onChangeTitle(event){
    //     setTitle(event.target.value)
    // }

    // function onChangeContents(event){
    //     setContents(event.target.value)
    // }

    function onClickRegister(){
        if(name === ""){
            setName("이름을 작성해 주세요")
        }
        if(password === ""){
            setPassword("비밀번호를 작성해 주세요")
        }
        if(title === ""){
            setTitle("제목을 작성해 주세요")
        }
        if(contents === ""){
            setContents("내용을 작성해 주세요")
        }

    }

    return (
        <WrapperForm>
            <FormTitle>
                게시물등록
            </FormTitle>

            <BodyHeader>
                <BodyHeaderLeft>
                    <Label>작성자</Label>
                    <WriteForm1 type="text" placeholder="이름을 적어주세요"></WriteForm1>
                    <ErrorMassage>{name}</ErrorMassage>
                </BodyHeaderLeft>
                <BodyHeaderRight>
                    <Label>비밀번호</Label>
                    <PasswordForm type="password" placeholder="비밀번호를 적어주세요"></PasswordForm>
                    <ErrorMassage>{password}</ErrorMassage>
                </BodyHeaderRight>
            </BodyHeader>

            <BodyTitle>
                <Label>제목</Label>
                <WriteForm2 type="text" placeholder="제목을 적어주세요."></WriteForm2>
                <ErrorMassage>{title}</ErrorMassage>
            </BodyTitle>

            <BodyContent>
                <Label>내용</Label>
                <WriteForm3 type="textarea" placeholder="내용을 입력해주세요."></WriteForm3>
                <ErrorMassage>{contents}</ErrorMassage>
            </BodyContent>            

            <AddressForm>
                <Label>주소</Label>
                <SearchWrapper>
                    <WriteFrom4 type="text" placeholder="017250"></WriteFrom4>
                    <AddressButton>우편번호 검색</AddressButton>
                </SearchWrapper>
                <WriteForm2 type="text"></WriteForm2>
                <WriteForm2 type="text"></WriteForm2>         
            </AddressForm>

            <YoutubeForm>
                <Label>유튜브부분</Label>
                <WriteForm2 type="text" placeholder="링크를 복사해주세요."></WriteForm2>
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


