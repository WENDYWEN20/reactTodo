import React from "react";
import ClassPosts from "./PostsHOC.jsx";
import ClassComments from "./CommentsHOC.jsx";
import ClassUsers from "./UsersHOC.jsx";

export default function Day8() {
    return (
      <div>  
        <ClassUsers  />
        <ClassComments  />
        <ClassPosts />
      </div>
    );
  }