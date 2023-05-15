import Post from "./Post";
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Первый вариант
    //   async function fetchData() {
    //     try {
    //       const responce = await fetch(API_URL);
    //       const jsonPosts = await responce.json();
    //       setPosts(jsonPosts);
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //     setIsLoading(false);
    //   }
    //   fetchData();
    // }, []);

    // Второй вариант
    //   const fetchData = async () => {
    //     try {
    //       const responce = await fetch(API_URL);
    //       const jsonPosts = await responce.json();
    //       setPosts(jsonPosts);
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //     setIsLoading(false);
    //   };
    //   fetchData();
    // }, []);

    // Третий вариант
    (async function () {
      try {
        const responce = await fetch(API_URL);
        const jsonPosts = await responce.json();
        setPosts(jsonPosts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

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
