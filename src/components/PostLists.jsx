import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import "./postlist.css";
import Modal from "./Modal";
import { useState } from "react";

export default function PostLists(props) {
  const [posts, setPost] = useState([]);

  function addPostHandler(postData) {
    setPost((existingPost) => [postData, ...existingPost]);
  }
  console.log(posts);
  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAdd={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className="posts">
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{color:"white",textAlign:"center"}} className="no-posts">
          <h3>No Posts Yet</h3>
        </div>
      )}
    </>
  );
}
