/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import "./components/SearchBar/SearchBarContainer";
import "./components/PostsContainer/PostsPage";
import "./components/SearchBar/SearchBar.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
// import the PostsPage and SearchBar and add them to the App




const App = () => {

  return (
    <div className="App">
      {/* Add imported components here to render them */}
     {/* {SearchBar()}, {PostsPage} */}
     
    <SearchBar/>
    <PostsPage />
    </div>
  );
};

export default App;
