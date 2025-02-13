import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: [r-1]100px [r-2]1000px [r-3]50px;
    grid-template-areas: 
        "header contentsBar rightBar"
        "menu contents ."
        "footer . .";
    gap: 20px;

    height: 100%;
    width: 100%;
    background-color: black;    
    
`;

// Left-Div
export const Header = styled.div`
    grid-area: header;
    justify-self: center;
    margin-right: 120px;    
    /* border: 2px solid red; */
`;
export const HeaderLogo = styled.span`
    color: white;
    font-size: 50px;    
`;

export const Menu = styled.div`    
    grid-area: menu;
    justify-self: center;
    display: flex;
    flex-direction: column;    
    align-items: start;
    gap: 10px;
    margin-left: 50px;
    // margin-top: 10px;
    /* border: 2px solid red;         */
`;
export const MenuItem = styled.div`  
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
    font-weight: bold;
  }
`;
export const MenuPostBtn = styled.div`    
    display: flex;        
    justify-content: center;
    width: 200px;
    height: 50px;    
    border: 2px solid gray;
    border-radius: 25px;
    background-color: white;
`
export const MenuPostBtnTitle = styled.span`
    align-self: center;
    color:  black;    
    font-weight: bold;
`

export const Footer = styled.footer`
    grid-area: footer;
    justify-self: center;
    margin-left: 50px;
    /* border: 2px solid red;   */
`;
export const FooterLoginInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    svg {        
        width: 25px;    
        fill: white;
    }
`
export const FooterLoginInfoImg = styled.img`
    height: 45px;
    width: 45px;
`
export const FooterLoginInfoText = styled.div`
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
export const ContentsBar = styled.div`
    grid-area: contentsBar;
    display: flex;   
    flex-direction: column;
    gap: 20px;
    border: 2px solid gray;    
`;
export const ContentsBarTitle = styled.div`
    flex-grow: 1;
    display: flex;    
    // border: 2px solid green; 
    span{        
        align-content: center;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }   
`;
export const ContentsBarSubTitle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-around;    
    // border: 2px solid red; 
    span{                
        align-content: center;
        color: white;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }   
`;

export const Contents = styled.div`
    grid-area: contents;
    border: 2px solid gray;    
`;


// Right-Div
export const RightBar = styled.div`
    grid-area: rightBar;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    //align-content: center;
    border: 2px solid green;
`;

export const RightBarSearch = styled.div`
    display: flex;        
    background-color: white;
    opacity: 0.2;
    border-radius: 60px;
    width: 300px;    
`;
export const RightBarSearchWrap = styled.div`
    display: flex;    
    align-content: center;
    svg {
        color: gray;
        width: 25px;
    }
`;
export const RightBarSearchInput = styled.input`
    height: 30px;
    border-radius: 60px;    
    border: none;
    color: black;
`;

export const RightBarCard1 = styled.div`
    display: flex;        
    flex-direction: column;
    justify-content: center;
    gap: 10px;    
    background-color: gray;
    border-radius: 20px;    
    width: 300px;
    height: 150px;    
    font-weight: bold;

    span {
        color: white;        
    }

    button {
        color: white;
        font-weight: bold;
    }
`;