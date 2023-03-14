import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" p-2 m-2 w-72 shadow-lg transition duration-300 ease-in-out  hover:bg-gray-300">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2  ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Likes</li>
      </ul>
    </div>
  );
};

export const ModifiedCard = ({ info }) => {
  return (
    <div className="m-2 border border-black opacity-100  transition duration-300 ease-in-out hover:opacity-100  hover:bg-red-400">
      <VideoCard info={info} />
    </div>
  );
};
export const sideModifiedCard = ({ info }) => {
  return (
    <div className="m-2 border border-black opacity-100  transition duration-300 ease-in-out hover:opacity-100  hover:bg-red-400">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
