// 로그인 폼과 회원가입 폼에서 동일하게 사용되는 컴포넌트이므로 공통 컴포넌트를 새로 생성한다.

import {styled} from "styled-components";

export const Popup_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 700px;
    background-color: black;        
`;

export const Header = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: black;
`
export const HeaderL_ExitBtn = styled.img`    
    width: 50px;
    height: 50px;
    pointer-events: auto;
    cursor: pointer;
    filter: opacity(1) drop-shadow(0 0 0 white);
`;
export const HeaderR_LoginLogo = styled.img`    
    width: 50px;
    height: 50px;
    margin-left: 170px;
`;

export const Body = styled.div`
    flex: 8;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;    
`
export const BodyTitle = styled.span`        
    color: white;
`
export const BodyForm = styled.form`    
    display: flex;     
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 30px;
    width: 100%;
`
export const BodyFormInput = styled.input`
    padding: 10px 20px;
    border-radius: 10px;
    border:2px solid #ddd;
    width: 70%;
    background-color: transparent; 
    color: white;
    font-size: 16px;
    &[type="submit"]{
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;
export const BodyFormSubmit = styled.button`
    display: flex;        
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;
    background-color: rgb(113, 118, 123);
    border-radius: 25px;    
    cursor: pointer;

    span {
        font-size: 20px;
        font-weight: bold;    
    }    
    &:hover {
        background-color: rgb(100, 110, 120); /* 호버 효과 */
        opacity: 0.9;
    }
`;

export const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

