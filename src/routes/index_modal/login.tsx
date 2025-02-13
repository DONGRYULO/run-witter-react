import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {auth} from "../../firebase";
import {Popup_Wrap, Error, Header, HeaderL_ExitBtn, HeaderR_LoginLogo, Body, BodyTitle, BodyForm, BodyFormInput, BodyFormSubmit} from "../../components/index/auth-components";



// 타입스크립트를 사용할 때는 부모 컴포넌트가 자식 컴포넌트로 
// 전달할 props의 타입을 자식 컴포넌트에서 명확히 지정해주는 것이 좋음
type LoginProps = {
    popupCheck: boolean;
    onClosePopup?: () => void;
};

export default function Login({popupCheck, onClosePopup}:LoginProps){
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(
        () => {            
            console.log("popupCheck 값: " + popupCheck);
        }        
    , [popupCheck]);    

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        setError('');

        if(isLoading || email === "" || password === "") return;

        try{            
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/main/home');
        }catch(e){
            if(e instanceof FirebaseError){                
                setError(e.message);
            }
        }finally{
            setLoading(false);
        }        
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e;

        if(name === 'email'){
            setEmail(value);
        }else if(name === 'password'){
            setPassword(value);
        }
    };

    return (
        <Popup_Wrap>
            <Header>
                <HeaderL_ExitBtn onClick={onClosePopup} src="/images/loginCloseBtn.png" />
                <HeaderR_LoginLogo src="/images/loginLogo.jpg" />
            </Header>
            <Body>
                <BodyTitle>로그인하기</BodyTitle>
                <BodyForm onSubmit={onSubmit}>                    
                    <BodyFormInput onChange={onChange} name="email" value={email} placeholder="이메일" type="email" required/>
                    <BodyFormInput onChange={onChange} name="password" value={password} placeholder="패스워드" type="password" required/>                    
                    <BodyFormSubmit type="submit">
                        {isLoading? '로그인중...': <span>로그인</span>}
                    </BodyFormSubmit>
                </BodyForm>
                {error !== '' ? <Error>{error}</Error> : null}                
            </Body>
        </Popup_Wrap>    
    );
}