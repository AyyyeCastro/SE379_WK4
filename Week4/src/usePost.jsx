import { useState } from "react";
import axios from "axios";
const baseURL = "http://localhost:3000/";

const usePost = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const PostingData = async (PostingData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}${url}`, PostingData);
      setData(response.data);
    } 
    catch (error) {
      console.log("An error occurred:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, PostingData };
};

export default usePost;
