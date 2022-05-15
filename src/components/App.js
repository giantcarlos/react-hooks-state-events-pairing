import { useState } from 'react';
import videoData from "../data/video.js";
import Video from "./Video";
import InfoSection from "./InfoSection";
import LikeButtons from "./LikeButtons";
import CommentsContainer from "./CommentsContainer";


function App() {
  console.log("Here's your data:", videoData);

  const [show, setShow] = useState(true)

  const hideComments = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <Video embedUrl={videoData.embedUrl} title={videoData.title}/>
      <InfoSection header={videoData.title} number={videoData.views} 
        date={videoData.createdAt}/>
      <LikeButtons upVotes={videoData.upvotes} 
        downVotes={videoData.downvotes}/>
      <button onClick={hideComments}>
        {show ? "Hide" : "Show"} Comments</button>
      <hr/>
      { show ? <CommentsContainer comments={videoData.comments}/> : null }
    </div>
  );
}

export default App;
