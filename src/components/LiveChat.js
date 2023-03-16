import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  //subscribing to the chat slice
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // API Pooling
      dispatch(addMessage({ name: "Navnit", message: "Hello guys" }));
      console.log("hi");
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-hidden">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index.key} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
