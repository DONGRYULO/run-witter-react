import { useState } from "react";
import {styled} from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;  
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;

const FormBottom = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
`;

const AttachFileButton = styled.label`  
  width: 80px;
  color: #1d9bf0;
  text-align: center;  
  cursor: pointer;
  svg {
     height: 40px;
     width: 50px;
  }
`;
const AttachFileInput = styled.input`
    display: none;
`;
const SubmitBtn = styled.button`
    background-color: #1d9bf0;
    width: 80px;
    height: 40px;
    color: white;
    border: none;
    padding: 10px 0px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.9;
    }
`;

export default function PostTweetForm() {
    const [isLoading, setLoading] = useState(false);
    const [tweet, setTweet] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const onChageTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {        
        setTweet(e.target.value);
    };
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {files} = e.target;
       if(files && files.length === 1){
          setFile(files[0]);
       }
    };

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;

        if(!user || isLoading || tweet === "" || tweet.length > 180) return;
            setLoading(true);
            const doc = await addDoc(collection(db, "tweets"), {
                tweet: tweet,
                createdAt: Date.now(),
                username: user.displayName || "Anonymous",
                userId: user.uid,
            });
            // TODO: 스토리지에 이미지 파일 추가
            // if(file) {
            //     updateDoc(doc, {
            //         photoUrl: doc.id,
            //     });
            // }
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <TextArea 
              rows={3}
              maxLength={180}
              onChange={onChageTextArea} 
              value={tweet} 
              placeholder="What is happening?!"
            /> 
            <FormBottom>
              <AttachFileButton htmlFor="file">
                <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                </svg>
                {file? 'Photo added' : ''}
              </AttachFileButton>
              <AttachFileInput onChange={onChangeFile} id="file" accept="image/*" type="file"/>              
              <SubmitBtn type="submit">{isLoading ? 'Posting..' : 'Post'}</SubmitBtn>
            </FormBottom>            
        </Form>
    );
}