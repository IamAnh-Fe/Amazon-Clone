import React, { useState, useEffect }  from "react";
let showComments = [];

const RepComment = ({comment, socket}) => {
     const [reply, setReply] = useState(false);
     const [name, setName] = useState("");

     const [replyComment, setReplyComment] = useState([]);
     const [hideReplyComment, setHideReplyComment] = useState([]);
    const [next, setNext] = useState(3);
    
    const loadMore = () => {
      setNext(next + 3);
    };

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
         setReply(true);
         setName(username);
       };

       const hideReply = () => {
         setReply(false);
         setNext(3);
       };
  return (
    <div>RepComment</div>
  )
}

export default RepComment