import { useState } from 'react'
import './App.css'
import FetchingData from './fetchingData';
import PostingData from './PostForm';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);
  

  const handleShowFetchDataDemo = ()=>{
    setShowFetchData(true);
    setPostData(false);
  }

  const handleShowPostDataDemo=()=>{
    setShowFetchData(false);
    setPostData(true);
  }

  return (
    <div className="container">
      <button onClick={()=> handleShowFetchDataDemo()} className="button">
        View Data 
      </button>

      <button onClick={()=> handleShowPostDataDemo()} className="button">
        Post Data 
      </button>
      <hr/>

      {showFetchData ? <FetchingData /> : <PostingData />}
        
    </div>
  );
}

export default App
