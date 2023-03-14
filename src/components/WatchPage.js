import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import VideoCard, { sideModifiedCard } from "./VideoCard";

import { setVideoData } from "../utils/videoDataSlice";

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
    <div>
      <div className="flex flex-row float-right">
        {/* {videoData[0] &&
          videoData[0].map((video) => {
            return (
              <div>
                <VideoCard info={video} />
              </div>
            );
          })} */}
      </div>
      <div className="flex flex-col">
        <div className="px-5">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
