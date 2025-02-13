import { useState } from "react";
import CreateAccount from "./index_modal/create-account";
import Login from "./index_modal/login"
import GithubLoginButton from "../components/index/github-btn";
import {
          Wrapper
        , Header
        , HeaderL_Wrap
        , HeaderL_Icon
        , HeaderR_Wrap
        , HeaderR_SubTitle
        , HeaderR_Line_Wrap
        , HeaderR_Line
        , HeaderR_Line_Title
        , HeaderR_CreateAccountBtn
        , HeaderR_CreateAccountTitle
        , HeaderR_PrivacyPolicy
        , HeaderR_Login_Wrap
        , HeaderR_LoginTitle
        , HeaderR_LoginBtn
        , HeaderR_LoginBtnTitle
        , Bottom
    } 
    from "../components/index/index-styled";

import '../components/index/index-css.css';



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
                    <HeaderL_Icon src="/images/indexIcon.jpg"></HeaderL_Icon>
                </HeaderL_Wrap>
                <HeaderR_Wrap>
                    <span className="sp-highlight">지금 일어나고 있는 일</span>
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