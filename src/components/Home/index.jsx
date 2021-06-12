import React from "react";
import PostCard from "../PostCard";

const posts = [
  {
    profilePic: "/assets/profile-1.jpeg",
    userName: "John Doe",
    uploadedPhoto: "/assets/uploaded-1.jpeg",
    numOfLikes: 37,
    uploadedTimeText: "40 minutes ago",
    hasStory: true,
    comments: [
      {
        userName: "Tom Cruz",
        message: "Nice pic",
      },
      {
        userName: "Penelope Cruz",
        message: "Love it",
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="lg:container mx-auto px-12 pt-24 grid grid-cols-3 gap-x-4">
      <div className="col-span-2">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      <div>hii</div>
    </div>
  );
};

export default Home;
