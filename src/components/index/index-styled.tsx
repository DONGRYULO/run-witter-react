import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: black;
`
export const Header = styled.div`
    flex: 9;
    display: flex;                
`
export const HeaderL_Wrap = styled.div`
    flex: 5;  
    display: flex;
    justify-content: center;          
`;
export const HeaderL_Icon = styled.img`            
    margin-top: 250px;
    width: 500px;
    height: 500px;    
`;

export const HeaderR_Wrap = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;
export const HeaderR_Title = styled.span`
    font-size: 80px;
    font-weight: bold;
    color: white;
`;
export const HeaderR_SubTitle = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

export const HeaderR_Line_Wrap = styled.div`    
    display: flex;
    width: 350px;
    height: 40px;
    justify-content: center;
    align-items: center;
`
export const HeaderR_Line = styled.div`    
      border-bottom: 2px solid #ddd; /* 선의 두께, 스타일, 색상 */
      opacity: 0.2; /* 요소 전체 투명도 50% */
      width: 100px; /* 선의 길이 */
`
export const HeaderR_Line_Title = styled.span`    
      color: white;
`

export const HeaderR_CreateAccountBtn = styled.div`
    display: flex;        
    justify-content: center;
    width: 350px;
    height: 50px;
    background-color: rgb(29, 155, 240);
    border-radius: 25px;
    cursor: pointer;
`
export const HeaderR_CreateAccountTitle = styled.span`    
    color: white;
    align-self: center;
`
export const HeaderR_PrivacyPolicy = styled.span`   
    width: 350px;
    font-size: 13px;
    color:  rgb(113, 118, 123);    

    a {            
        text-decoration: none;
        color: rgb(29, 155, 240);
    }
`

export const HeaderR_Login_Wrap = styled.div`    
    display: flex;
    flex-direction: column;    
    gap: 20px;
`
export const HeaderR_LoginTitle = styled.span`    
    font-size: 20px;        
    font-weight: bold;
    color: white;
`
export const HeaderR_LoginBtn = styled.div`    
    display: flex;        
    justify-content: center;
    width: 350px;
    height: 50px;    
    border: 2px solid gray;
    border-radius: 25px;
    cursor: pointer;
`
export const HeaderR_LoginBtnTitle = styled.span`
    color:  rgb(29, 155, 240);
    align-self: center;
`

export const Bottom = styled.div`
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