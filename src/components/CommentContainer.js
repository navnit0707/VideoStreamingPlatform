import React from "react";
import { commentsData } from "../utils/contants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-300 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user-icon"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-2 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold "> Comments :</h1>
      <Comment data={commentsData[0]} />
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
