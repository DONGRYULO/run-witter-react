import styled from "styled-components";
import { useState } from "react";
import CreateAccount from "./create-account";
import Login from "./login";
import GithubLoginButton from "../components/github-btn";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: black;
`
const Header = styled.div`
    flex: 9;
    display: flex;                
`
const HeaderL_Wrap = styled.div`
    flex: 5;  
    display: flex;
    justify-content: center;          
`;
const HeaderL_Icon = styled.img`            
    margin-top: 250px;
    width: 500px;
    height: 500px;    
`;

const HeaderR_Wrap = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const HeaderR_Title = styled.h1`        
    color: white;
`;
const HeaderR_SubTitle = styled.h2`
    color: white;
`;

const HeaderR_Line_Wrap = styled.div`    
    display: flex;
    width: 350px;
    height: 40px;
    justify-content: center;
    align-items: center;
`
const HeaderR_Line = styled.div`    
      border-bottom: 2px solid #ddd; /* 선의 두께, 스타일, 색상 */
      opacity: 0.2; /* 요소 전체 투명도 50% */
      width: 100px; /* 선의 길이 */
`
const HeaderR_Line_Title = styled.span`    
      color: white;
`

const HeaderR_CreateAccountBtn = styled.div`
    display: flex;        
    justify-content: center;
    width: 350px;
    height: 50px;
    background-color: rgb(29, 155, 240);
    border-radius: 25px;
`
const HeaderR_CreateAccountTitle = styled.span`    
    color: white;
    align-self: center;
`
const HeaderR_PrivacyPolicy = styled.span`   
    width: 350px;
    font-size: 13px;
    color:  rgb(113, 118, 123);    

    a {            
        text-decoration: none;
        color: rgb(29, 155, 240);
    }
`

const HeaderR_Login_Wrap = styled.div`    
    display: flex;
    flex-direction: column;    
`
const HeaderR_LoginTitle = styled.h1`    
    color: white;
`
const HeaderR_LoginBtn = styled.div`    
    display: flex;        
    justify-content: center;
    width: 350px;
    height: 50px;    
    border: 2px solid gray;
    border-radius: 25px;
`
const HeaderR_LoginBtnTitle = styled.span`
    color:  rgb(29, 155, 240);
    align-self: center;
`

const Bottom = styled.div`
    flex: 1;    
    display: flex;    
    flex-direction: row;   
    justify-content: center;
    
    gap: 40px;
    align-items: center; 

    a {        
        text-decoration: none;
        color:  rgb(113, 118, 123);
    }
`;

export default function Index(){
    const [createAccountPopup, setCreateAccountPopup] = useState(false);
    const [loginPopup, setLoginPopup] = useState(false);

    const onClickCreateAccountPopup = () => {
        setCreateAccountPopup(true);
    };
    const onCloseCreateAccountPopup = () => {        
        setCreateAccountPopup(false);
    };

    const onClickLoginPopup = () => {
        setLoginPopup(true);
    };
    const onCloseLoginPopup = () => {
        setLoginPopup(false);
    };

    return (            
        <Wrapper>
            <Header>
                <HeaderL_Wrap>
                    <HeaderL_Icon src="/css/indexIcon.jpg"></HeaderL_Icon>
                </HeaderL_Wrap>
                <HeaderR_Wrap>
                    <HeaderR_Title>지금 일어나고 있는 일</HeaderR_Title>
                    <HeaderR_SubTitle>지금 가입하세요</HeaderR_SubTitle>
                    <GithubLoginButton/>
                    <HeaderR_Line_Wrap>
                        <HeaderR_Line/>
                        <HeaderR_Line_Title>또는</HeaderR_Line_Title>
                        <HeaderR_Line/>
                    </HeaderR_Line_Wrap>
                    <HeaderR_CreateAccountBtn onClick={onClickCreateAccountPopup}>
                        <HeaderR_CreateAccountTitle>계정 만들기</HeaderR_CreateAccountTitle>
                    </HeaderR_CreateAccountBtn>
                    <HeaderR_PrivacyPolicy>
                        가입하시려면 
                        <a href="https://help.x.com/rules-and-policies/twitter-cookies"><span>쿠키 사용</span></a>
                        을 포함해 
                        <a>이용약관</a>과 
                        <a>개인정보 처리방침</a>
                        에 동의해야 합니다.
                    </HeaderR_PrivacyPolicy>

                    <HeaderR_Login_Wrap>
                        <HeaderR_LoginTitle>이미 트위터에 가입하셨나요?</HeaderR_LoginTitle>
                        
                            <HeaderR_LoginBtn onClick={onClickLoginPopup}>                            
                                    <HeaderR_LoginBtnTitle>로그인</HeaderR_LoginBtnTitle>                            
                            </HeaderR_LoginBtn>
                        
                    </HeaderR_Login_Wrap>

                    {/* 계정 생성 팝업 호출 */}
                    {createAccountPopup && 
                        <CreateAccount popupCheck={createAccountPopup} onClosePopup={onCloseCreateAccountPopup} />
                    }
                    {/* 로그인인 팝업 호출 */}
                    {loginPopup && 
                        <Login popupCheck={loginPopup} onClosePopup={onCloseLoginPopup} />
                    }
                </HeaderR_Wrap>
            </Header>
            <Bottom>
                <a href="https://about.x.com">소개</a>
                <a href="https://about.x.com">X 앱 다운로드하기</a>
                <a href="https://about.x.com">고객센터</a>
                <a href="https://about.x.com">이용약관</a>
                <a href="https://about.x.com">개인정보 처리방침</a>
                <a href="https://about.x.com">쿠키 정책</a>
                <a href="https://about.x.com">접근성</a>
                <a href="https://about.x.com">광고 정보</a>
                <a href="https://about.x.com">블로그</a>
                <a href="https://about.x.com">채용</a>
                <a href="https://about.x.com">브랜드 리소스</a>
                <a href="https://about.x.com">광고</a>
                <a href="https://about.x.com">마케팅</a>
                <a href="https://about.x.com">비즈니스용 X</a>
                <a href="https://about.x.com">개발자</a>
                <a href="https://about.x.com">디렉터리</a>
                <a href="https://about.x.com">설정</a>
                <a href="https://about.x.com">@2025 X Corp.</a>
            </Bottom>
        </Wrapper>
    );
}