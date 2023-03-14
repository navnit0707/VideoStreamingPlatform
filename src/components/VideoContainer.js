import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard, { ModifiedCard } from "./VideoCard";
import { setVideoData } from "../utils/videoDataSlice";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    setvideos(json.items);
    dispatch(setVideoData(json.items));
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap">
        {videos[0] && <ModifiedCard info={videos[0]} />}
        {videos.map((video) => {
          return (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard key={video.id} info={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
