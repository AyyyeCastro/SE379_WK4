import { useState } from "react";
import usePost from "./usePost";
import 'bootstrap/dist/css/bootstrap.css';

const PostForm = () => {
  const [title, setTitle] = useState(""); //empty
  const [body, setBody] = useState(""); //empty
  const { data, error, loading, PostingData } = usePost("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    PostingData({ title, body, userId: 1 });
  };

  // if loading ->  
  if (loading) {
    return <p>Loading...</p>;
  }

  // if an error ->
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  // if data ->
  if (data) {
    return (
      <>
        <p>Posted onto server:</p>
        <br></br>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
        <button onClick={() => window.location.reload()}>Go Back</button>
      </>
    );
  }

  // form for posting
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label htmlFor="title">Title:</label>
        <input // I hate that Prettier formats it like this D; 
          type="text"
          id="title"
          value={title}
          // set it on change
          onChange={(e) => setTitle(e.target.value)}
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          // set it on change
          onChange={(e) => setBody(e.target.value)}
          required
          class="form-control"
        />
      </div>


      <button type="submit" class="btn btn-warning">Submit</button>
    </form>
  );
};

export default PostForm;
