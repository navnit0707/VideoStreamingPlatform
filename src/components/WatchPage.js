import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

import { setVideoData } from "../utils/videoDataSlice";
import LiveChat from "./LiveChat";

const sideVideoCard = () => {};
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoData = useSelector((store) => store.videoData);
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" w-full flex flex-col">
      <div className="px-5 flex">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
