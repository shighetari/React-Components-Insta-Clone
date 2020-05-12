//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  const [userData, setUserData] = useState(data)
  return (
    <div className="posts-container-wrapper">

    {userData.map(randomPost => { 
      // console.log(randomPost)
      return <Post key = {randomPost.username} post = {randomPost} /> })
        }

      {/* map through data here to return a Post and pass data as props to Post */}

    </div>
  );
};

export default PostsPage;
