import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import {styled} from "styled-components";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const HeaderR_SnsCreateAccountBtn = styled.div`
    display: flex;        
    justify-content: center;
    width: 350px;
    background-color: white;    
    border-radius: 25px;
`
const HeaderR_SnsCreateAccountIcon = styled.img`    
    width: 50px;
    height: 50px;    
`
const HeaderR_SnsCreateAccountTitle = styled.span`    
    color: black;
    align-self: center;
`

export default function GithubLoginButton(){
    const navigate = useNavigate();

    const onClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);   
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <HeaderR_SnsCreateAccountBtn onClick={onClick}>
            <HeaderR_SnsCreateAccountIcon src="/images/GoogleSnsLogo.png"></HeaderR_SnsCreateAccountIcon>
            <HeaderR_SnsCreateAccountTitle>Google 계정으로 가입하기</HeaderR_SnsCreateAccountTitle>                        
        </HeaderR_SnsCreateAccountBtn>
    );
}