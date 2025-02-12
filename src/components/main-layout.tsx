import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import PostTweetForm from "./post-tweet-form";
import Home from "../routes/home";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: [r-1]50px [r-2]1000px [r-3]50px;
    grid-template-areas: 
        "header contentsBar rightBar"
        "menu contents ."
        "footer . .";
    gap: 10px;

    /* & > div:nth-child(1) {
        grid-column: 1 / span 2;
    } */

    height: 100%;
    width: 100%;
    background-color: black;    
    
`;

// Left-Div
const Header = styled.div`
    grid-area: header;
    justify-self: center;
    border: 2px solid red;
`;
const HeaderLogo = styled.img`
    height: 50px;
    width: 50px;
`;

const Menu = styled.div`    
    grid-area: menu;
    justify-self: center;
    display: flex;
    flex-direction: column;    
    gap: 10px;
    margin-left: 50px;
    border: 2px solid red;        
`;
const MenuItem = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 10px;
  cursor: pointer;
  svg {
    width: 40px;    
    fill: white;
  } 
  span {
    color: white;   
    font-size: 20px; 
  }
`;
const MenuPostBtn = styled.div`    
    display: flex;        
    justify-content: center;
    width: 200px;
    height: 50px;    
    border: 2px solid gray;
    border-radius: 25px;
    background-color: white;
`
const MenuPostBtnTitle = styled.span`
    align-self: center;
    color:  black;    
    font-weight: bold;
`

const Footer = styled.footer`
    grid-area: footer;
    //justify-self: end;
    //margin-left: 50px;
    border: 2px solid red;  
`;
const FooterLoginInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    svg {        
        width: 25px;    
        fill: white;
    }
`
const FooterLoginInfoImg = styled.img`
    height: 45px;
    width: 45px;
`
const FooterLoginInfoText = styled.div`
    display: flex;
    flex-direction: column;

    & > span:nth-child(1) {
        color: white;
    }
    & > span:nth-child(2) {
        color: gray;
    }
`

// Center-Div
const ContentsBar = styled.div`
    grid-area: contentsBar;
    display: flex;   
    border: 2px solid red;    
`;
const ContentsBarTitle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;    
    border: 2px solid green; 
    span{        
        align-content: center;
        color: "white";
    }   
`;

const Contents = styled.div`
    grid-area: contents;
    border: 2px solid blue;    
`;


// Right-Div
const RightBar = styled.div`
    grid-area: rightBar;
    grid-row-start: 1;
    grid-row-end: 3;
    border: 2px solid green;
`



export default function MainLayout(){
    
     return (
        <>
            <Wrapper>
                {/* Left */}
                <Header>
                    <HeaderLogo src="/css/mainHeaderLogo.jpg"/>
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

                    <MenuPostBtn>
                        <MenuPostBtnTitle>Post</MenuPostBtnTitle>
                    </MenuPostBtn>
                </Menu>
                <Footer>
                    <FooterLoginInfo>
                        <FooterLoginInfoImg src="/css/mainHeaderLogo.jpg"/>
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
                        <span>For you 1</span>                        
                    </ContentsBarTitle>
                    <ContentsBarTitle>
                        <span>Following</span>
                    </ContentsBarTitle>
                </ContentsBar>
                <Contents>   
                    {/* 선택한 메뉴에 따라서 동적으로 변경됨(Home, Profile ..등) */}
                    <Outlet/>
                </Contents>
                
                {/* Right */}                                
                
            </Wrapper>
        </>
     );
}