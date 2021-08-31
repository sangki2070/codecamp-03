import{Faq, State, Header, Body, Footer, Shape, Triangle, Battery, Search, MyInformation, MyHeader, MyProfile, MyPhoto, MyName, ArrowRight, Menu, Menu1, Menu2, Menu3, Underline, Number, Arrow, Body1, Body2, QuestonNumber, Answer, FooterWrapper, FooterWord, FooterHouse, FooterRoad, FooterFavorite, FooterMySelected, FooterWord2} from'../../../styles/01-faq-styled'
// import { Wrapper } from '../../../styles/Example'

export default function FaqPage(){



    return(
        <Faq>
            <State>
                <Shape></Shape>
                <Triangle></Triangle>
                <Battery></Battery>
                <div>12:30</div>
            </State>

            <Header>
                <Search></Search>
                <MyInformation>
                    <MyHeader>
                        마이
                    </MyHeader>
                    <MyProfile>
                        <MyPhoto>
                            {/* <img src="/images/Face.jpg"> */}
                        </MyPhoto>
                        <MyName>
                            임정아
                        </MyName>
                        <ArrowRight>

                        </ArrowRight>
                    </MyProfile>
                </MyInformation>
                <Menu>
                    <Menu1>공지사항</Menu1>
                    <Menu2>이벤트</Menu2>
                    <Menu3>
                        FAQ
                        <Underline color="#ff1b6d"></Underline>
                        {/* <Underline clolr="#ff1b6d"></Underline> */}
                    </Menu3>
                    <Menu2>Q&A</Menu2>
                </Menu>
                {/* <Underline>

                </Underline> */}
            </Header>

            <Body>
                <Body1>
                    <Body2>
                        <Number>
                            <QuestonNumber>
                                Q.01
                            </QuestonNumber>
                            <Answer>
                                리뷰 작성은 어떻게 하나요?
                            </Answer>
                        </Number>
                        <Arrow></Arrow>
                    </Body2>
                    <Body2>
                        <Number>
                            <QuestonNumber>
                                Q.02
                            </QuestonNumber>
                            <Answer>
                                리뷰 수정/삭제는 어떻게 하나요?
                            </Answer>
                        </Number>
                        <Arrow></Arrow>
                    </Body2>
                    <Body2>
                        <Number>
                            <QuestonNumber>
                                Q.03
                            </QuestonNumber>
                            <Answer>
                                아이디/비밀번호를 잊어버렸어요.
                            </Answer>
                        </Number>
                        <Arrow></Arrow>
                    </Body2>
                    <Body2>
                        <Number>
                            <QuestonNumber>
                                Q.04
                            </QuestonNumber>
                            <Answer>
                                회원탈퇴를 하고싶어요.
                            </Answer>
                        </Number>
                        <Arrow></Arrow>
                    </Body2>
                    <Body2>
                        <Number>
                            <QuestonNumber>
                                Q.05
                            </QuestonNumber>
                            <Answer>
                                출발지 설정은 어떻게 하나요?
                            </Answer>
                        </Number>
                        <Arrow></Arrow>
                    </Body2>
                    <Body2>
                        <Number>
                            <QuestonNumber>
                                Q.06
                            </QuestonNumber>
                            <Answer>
                                비밀번호를 변경하고싶어요.
                            </Answer>
                        </Number>
                        <Arrow></Arrow>
                    </Body2>
                </Body1>
            </Body>

            <Footer>
                <FooterWrapper>
                    <FooterHouse></FooterHouse>
                    <FooterWord>홈</FooterWord>
                </FooterWrapper>
                <FooterWrapper>
                    <FooterRoad></FooterRoad>
                    <FooterWord>잇츠로드</FooterWord>
                </FooterWrapper>
                <FooterWrapper>
                    <FooterFavorite></FooterFavorite>
                    <FooterWord>마이찜</FooterWord>
                </FooterWrapper>
                <FooterWrapper>
                    <FooterMySelected></FooterMySelected>
                    <FooterWord2>마이</FooterWord2>
                </FooterWrapper>
            </Footer>
        </Faq>
    )


}