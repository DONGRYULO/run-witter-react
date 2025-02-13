import { Link, Outlet } from "react-router-dom";
import {
      Wrapper
    , Header
    , HeaderLogo
    , Menu
    , MenuItem
    , MenuPostBtn
    , MenuPostBtnTitle
    , Footer
    , FooterLoginInfo
    , FooterLoginInfoImg
    , FooterLoginInfoText
    , ContentsBar
    , ContentsBarTitle
    , ContentsBarSubTitle
    , Contents
    , RightBar
    , RightBarSearch
    , RightBarSearchWrap
    , RightBarSearchInput
    , RightBarCard1
} from "./main-layout-styled";

export default function MainLayout(){
    
     return (
        <>
            <Wrapper>
                {/* Left */}                
                <Header> 
                    <HeaderLogo>𝕏</HeaderLogo>
                </Header>
                <Menu>
                    <Link to="/main/home">
                        <MenuItem>
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"></path>
                            </svg>                        
                            <span>Home</span>
                        </MenuItem>
                    </Link>

                    <Link to="/main/profile">
                        <MenuItem>
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
                            </svg>
                            <span>Profile</span>
                        </MenuItem>
                    </Link>

                    <Link to="/main/marthon-info">
                        <MenuItem>
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
                            </svg>
                            <span>marthon 정보</span>
                        </MenuItem>
                    </Link>

                    <MenuPostBtn>
                        <MenuPostBtnTitle>Post</MenuPostBtnTitle>
                    </MenuPostBtn>
                </Menu>
                <Footer>
                    <FooterLoginInfo>
                        <FooterLoginInfoImg src="/images/mainHeaderLogo.jpg"/>
                        <FooterLoginInfoText>
                            <span>이름</span>
                            <span>f1@naver.com</span>
                        </FooterLoginInfoText>
                        <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                        </svg>
                    </FooterLoginInfo>
                </Footer>                

                {/* Center */}
                <ContentsBar>
                    <ContentsBarTitle>
                        <span>홈</span>
                    </ContentsBarTitle>                    
                    <ContentsBarSubTitle>
                        <span>추천</span>
                        <span>팔로우 중</span>
                    </ContentsBarSubTitle>
                </ContentsBar>
                <Contents>   
                    {/* 선택한 메뉴에 따라서 동적으로 변경됨(Home, Profile ..등) */}
                    <Outlet/>
                </Contents>
                
                {/* Right */}     
                <RightBar>
                    <RightBarSearch>
                        <RightBarSearchWrap>
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"></path>
                            </svg>                                         
                        </RightBarSearchWrap>
                        <RightBarSearchInput placeholder="검색" />
                    </RightBarSearch>
                    <RightBarCard1>
                        <span style={{ fontSize: '16px'}}>Premium 구독하기</span>
                        <span style={{ fontSize: '15px'}}>
                             구독하여 새로운 기능을 이용해 보세요. 자격을 충족하는 경우 광고 수익 배분금도 받을 수 있습니다.
                        </span>
                        <button style={{ fontSize: '15px', borderRadius:'60px', background:'blue', width:'100px' }}>게시하기</button>
                    </RightBarCard1>
                </RightBar>

                
                
            </Wrapper>
        </>
     );
}