import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerator, randomTextGenerator } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  //subscribing to the chat slice
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // API Pooling
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomTextGenerator(20) + " 👍",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-auto overflow-y-scroll flex flex-col">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index.key} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full h-[50px] ml-2 p-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Navnit", message: liveMessage }));
        }}>
        <input
          className="w-96 px-2 bg-gray-100 border border-blachk"
          type="text"
          value={liveMessage}
          placeholder="Send message to the live chat "
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
