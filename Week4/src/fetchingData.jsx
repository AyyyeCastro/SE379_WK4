import React from 'react';
import useFetch from './useFetch';
import Loading from './Loading';

const FetchingData = () => {
   const { data, error, loading } = useFetch('posts');
 
   if (loading) {
     return <Loading />;
   }
 
   if (error) {
     return <p>An error occurred {error.message}</p>;
   }
 
   return (
     <>
       {data?.map((product) => {
         return (
           <div key={product.id}>
             <p>Title: {product.title}</p>
             <p>Body: {product.body}</p>
             <hr/>
           </div>
           
         );
       })}
     </>
   );
 };

 export default FetchingData;