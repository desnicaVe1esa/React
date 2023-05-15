import "./Post.css";

const Post = (data) => {
  const { id, userId, title, body } = data;
  return (
    <div className="post">
      {/* <p>id: {data.id}</p>
      <p>userID: {data.userId}</p>
      <p>userID: {data.title}</p>
      <p>userID: {data.body}</p> */}
      <p>id: {id}</p>
      <p>userID: {userId}</p>
      <p>userID: {title}</p>
      <p>userID: {body}</p>
    </div>
  );
};

export default Post;
