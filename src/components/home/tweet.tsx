import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid red;
  border-radius: 15px;
`;
const Column = styled.div``;
const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;
const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;
const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  text-transform: uppercase;
  border-radius:  5px; 
  cursor: pointer;
`;

export default function Tweet({username, photo, tweet, userId, id}:ITweet){
    const user = auth.currentUser;
    const onDelete = async () => {
        const ok = confirm("Are you sure you want to delete this tweet?");

        if(!ok || user?.uid !== userId) return;        
        try {
          await deleteDoc(doc(db, "tweets", id));
          // TODO : 첨부된 사진이 있는 경우에만 제거
          // if(photo) {
          //    remove
          // }
        } catch (e) {
           console.log(e);
        } finally{

        }
    }

    return (
        <Wrapper>
          <Column>
            <Username>{username}</Username>
            <Payload>{tweet}</Payload>
            {/* 작성자만 삭제버튼이 보이도록 변경 */}
            {user?.uid === userId ? <DeleteButton onClick={onDelete}>Delete</DeleteButton> : ''}
          </Column>
          {photo ? (
            <Column>
              <Photo src={photo} />
            </Column>
          ) : null}
        </Wrapper>
      );
}