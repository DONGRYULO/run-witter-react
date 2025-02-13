import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {auth} from "../../firebase";
import {Popup_Wrap, Error, Header, HeaderL_ExitBtn, HeaderR_LoginLogo, Body, BodyTitle, BodyForm, BodyFormInput, BodyFormSubmit} from "../../components/index/auth-components";

// 타입스크립트를 사용할 때는 부모 컴포넌트가 자식 컴포넌트로 
// 전달할 props의 타입을 자식 컴포넌트에서 명확히 지정해주는 것이 좋음
type CreateAccountProps = {
    popupCheck: boolean;
    onClosePopup?: () => void;
};

export default function CreateAccount({popupCheck, onClosePopup}:CreateAccountProps){
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState('');
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
        setLoading(true);

        if(isLoading || name === "" || email === "" || password === "") return;

        try{
            const credentials = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(credentials.user, {
                displayName: name,
            });
            navigate('/'); // 계정 생성시 로그인 페이지로 이동            
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

        if(name === 'name'){
            setName(value);
        }else if(name === 'email'){
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
                <BodyTitle>계정을 생성하세요</BodyTitle>
                <BodyForm onSubmit={onSubmit}>
                    <BodyFormInput onChange={onChange} name="name" value={name} placeholder="Name" type="text" required/>
                    <BodyFormInput onChange={onChange} name="email" value={email} placeholder="이메일" type="email" required/>
                    <BodyFormInput onChange={onChange} name="password" value={password} placeholder="패스워드" type="password" required/>                    
                    <BodyFormSubmit type="submit">
                        {isLoading? '생성중...': <span>생성하기</span>}
                    </BodyFormSubmit>
                </BodyForm>
                {error !== '' ? <Error>{error}</Error> : null}                
            </Body>
        </Popup_Wrap>    
    );
}