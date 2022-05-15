import { useState } from 'react';

function LikeButtons ({ upVotes, downVotes }) {

    const [upNumber, setUpNumber] = useState(upVotes)
    const [downNumber, setDownNumber] = useState(downVotes)

   const handleLikeClick = (like = true) => {
       if (like) {
           setUpNumber(upNumber + 1)
       } else {
           setDownNumber(downNumber +1)
       }
   }

    return (
        <p>
            <button onClick={() => handleLikeClick() }>{upNumber}👍</button>
            <button onClick={() => handleLikeClick(false) }>{downNumber}👎</button>
        </p>
    )
}

export default LikeButtons;