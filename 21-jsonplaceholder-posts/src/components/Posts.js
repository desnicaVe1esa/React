import Post from "./Post";
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL)
      .then((responce) => responce.json())
      .then((jsonPosts) => setPosts(jsonPosts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })
      )}
    </>
  );
};

export default Posts;
