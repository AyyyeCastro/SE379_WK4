import React from "react";
import useFetch from "./useFetch";

const useFetchProducts=()=>{
   const {data: products, loading, error}= useFetch('posts');
   return{products, loading, error};
}

export default useFetchProducts;