import React, { useEffect, useState } from "react";
import ClassPosts from "./PostsHOC.jsx";
import ClassComments from "./CommentsHOC.jsx";
import ClassUsers from "./UsersHOC.jsx";

export default function Day8() {
    return (
      <div>  
        <ClassUsers title="All my users" />
        <ClassComments title="All my comments" />
        <ClassPosts title="All my posts" />
      </div>
    );
  }