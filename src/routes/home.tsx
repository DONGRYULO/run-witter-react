import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/home/timeline";

const Wrapper = styled.div`
    display: grid;
    gap: 50px;    
    max-height: 1000px; /* 최대 높이 제한 */    
    grid-template-rows: 1fr 5fr;
`;

export default function Home(){
    return (
        <Wrapper>
            <PostTweetForm/>
            <Timeline/>
        </Wrapper>
    );
}