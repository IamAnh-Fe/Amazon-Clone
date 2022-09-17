import React, { useState, useEffect, useRef }  from "react";
import ListComment from '../listComment'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

let showComments = [];

const RepComment = ({comment, socket}) => {
    const [reply, setReply] = useState(false);
    const [name, setName] = useState("");
    const [evaluate, setEvaluate] = useState("");
    const [replyComment, setReplyComment] = useState([]);
    const [hideReplyComment, setHideReplyComment] = useState([]);
    const [next, setNext] = useState(3);
        const contentRef = useRef()
       const send = "replyComment"
       const user = useSelector((state) => state.auth.login.currentUser);
  const username = user?.username;
    const loadMore = () => {
      setNext(next + 3);
    };
    // name reply
        useEffect(() => {
        if(name){
         contentRef.current.textContent = `${name}:`
        }
    },[name])
// Load more reply comment
       useEffect(() => {
         const loopWithSlice = () => {
           let start =
             comment.reply.length - next < 0 ? 0 : comment.reply.length - next;

           showComments = comment.reply.slice(start, comment.reply.length);

           setHideReplyComment(start);
           setReplyComment(showComments);
         };

         loopWithSlice(next);
       }, [comment.reply, next]);


       const handleReply = (username) => {
        if(!username){
          toast.error("You need to login to reply");
        } else {
          setReply(true);
          setName(username);
        }
       };

       const hideReply = () => {
         setReply(false);
         setNext(3);
       };

    const onSubmit = async (e) => {

    const createdAt = new Date().toISOString()
    const review = {
      id: comment._id,
      name: username,
      comment: evaluate,
      send,
       createdAt :  createdAt
    };
    socket.emit("createReview", review);
    setEvaluate("");
    if(setReply) setReply(false)
  };
  return (
      <ListComment comment={comment} name={name} >
    <div>
      <div>
         <span className="review-reply" onClick={() => handleReply(comment.name)}>Reply</span>
                    {
                        hideReplyComment > 0 && 
                        <span onClick={loadMore}>Load more {hideReplyComment} comments</span>
                    }
                    
                    <span onClick={hideReply}>Hide Reply</span>
      </div>
        <div>
                    {
                        replyComment.map(rep => (
                          <ListComment comment={rep} key={rep._id}>
                                <div>
                                    <p onClick={() => handleReply(rep.name)}>Reply</p>
                                </div>
                            </ListComment>
                        ))
                    }
                </div>
                   {
                    reply && 
                 <div>
              <textarea
                ref={contentRef} 
                className="review-textarea"
                placeholder="Write your review"
                onChange={(e) => setEvaluate(e.target.value)}
              />
              <button
                className="review-send"
                type="submit"
                onClick={() => onSubmit()}
              >
                Send
              </button>
            </div>
                }
    </div>
                </ListComment>

  )
}

export default RepComment