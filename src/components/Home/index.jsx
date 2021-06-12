import React from "react";
import PostCard from "../PostCard";
import SideMenu from "../SideMenu";
import UploadedImage1 from "../../assets/uploaded-1.jpeg";
import ProfilePic1 from "../../assets/profile-1.jpeg";
import UploadedImage2 from "../../assets/uploaded-2.jpg";
import ProfilePic2 from "../../assets/profile-2.jpeg";

const posts = [
  {
    profilePic: ProfilePic1,
    userName: "Jane Doe",
    uploadedPhoto: UploadedImage1,
    numOfLikes: 37,
    uploadedTimeText: "40 minutes ago",
    hasStory: true,
    comments: [
      {
        userName: "Lily Collins",
        message: "Nice pic",
      },
      {
        userName: "Penelope Cruz",
        message: "Love it",
      },
    ],
  },
  {
    profilePic: ProfilePic2,
    userName: "John Doe",
    uploadedPhoto: UploadedImage2,
    numOfLikes: 2,
    uploadedTimeText: "1 minute ago",
    hasStory: false,
    comments: [
      {
        userName: "George Clooney",
        message: "Nice pic",
      },
      {
        userName: "Britt Robertson",
        message: "Love it",
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="lg:container mx-auto lg:px-12 px-3 pt-24 grid grid-cols-2 lg:grid-cols-3 gap-x-5">
      <div className="col-span-2 max-w-full sm:max-w-xl lg:max-w-full mx-0 sm:mx-auto lg:mx-0">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      <div className="hidden lg:block">
        <SideMenu />
      </div>
    </div>
  );
};

export default Home;
