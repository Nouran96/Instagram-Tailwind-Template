import React, { useState } from "react";

const PostCard = ({ post }) => {
  const [comment, setComment] = useState("");

  return (
    <div className="bg-white w-full border border-gray-200 rounded-sm flex flex-col mb-12">
      {/* Header */}
      <div className="flex justify-between py-2 px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pr-3">
            <img
              src={post.profilePic}
              alt=""
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>

          <span className="font-semibold text-sm">{post.userName}</span>
        </div>

        <a href="#">
          <img
            src={process.env.PUBLIC_URL + "/assets/moreOptions.svg"}
            alt="More options"
          />
        </a>
      </div>

      {/* Uploaded Image */}
      <div>
        <img src={post.uploadedPhoto} alt="" className="w-full object-top" />
      </div>

      <div className="flex flex-col py-2 px-4 space-y-2">
        {/* Interactions Bar */}
        <div className="flex justify-between">
          <div className="space-x-4 flex items-center">
            <a href="#">
              <img src={process.env.PUBLIC_URL + "/assets/likes.svg"} alt="" />
            </a>

            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "/assets/comment.svg"}
                alt=""
              />
            </a>

            <a href="#">
              <img src={process.env.PUBLIC_URL + "/assets/inbox.svg"} alt="" />
            </a>
          </div>

          <a href="#">
            <img src={process.env.PUBLIC_URL + "/assets/bookmark.svg"} alt="" />
          </a>
        </div>

        {/* Number of likes */}
        <span className="font-medium text-sm">{post.numOfLikes} likes</span>

        {/* Comments section */}
        {post.comments.map((comment, index) => (
          <div key={index} className="flex space-x-2 text-sm">
            <span className="font-semibold">{comment.userName}</span>
            <span>{comment.message}</span>
          </div>
        ))}

        {/* Time of post */}
        <span className="font-light text-gray-500 text-xs uppercase">
          {post.uploadedTimeText}
        </span>
      </div>

      <hr />

      {/* Add a comment */}
      <form className="flex space-x-4 items-center p-4">
        <div className="flex space-x-4 flex-grow">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={process.env.PUBLIC_URL + "/assets/emoji.svg"} alt="" />
            </a>
          </div>

          <input
            type="text"
            placeholder="Add a comment..."
            className="max-w-3/4 sm:max-w-none border-none text-sm focus:outline-none"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button type="submit" className="main-btn" disabled={!comment}>
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCard;
