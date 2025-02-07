import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 4fr;
    height: 100%;
    width: 100%;

    background-color: white;
`;

const Header = styled.div`    
    border: 2px solid red;    
    height: 200px;
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    border: 2px solid blue;
    height: 800px;    
`;

const LeftNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 2px solid green;
`
const CenterContent = styled.div`
    border: 2px solid green;
`
const RightNav = styled.div`
    border: 2px solid green;
`


export default function Layout(){
     return (
        <>
            <Wrapper>
                <Header></Header>
                <Main>
                    <LeftNav>
                        <ul>
                            <li>홈</li>
                            <li>프로필</li>
                        </ul>
                    </LeftNav>
                    <CenterContent></CenterContent>
                    <RightNav></RightNav>
                </Main>
            </Wrapper>
        </>
     );
}