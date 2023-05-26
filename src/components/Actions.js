import React, { useState } from 'react';

function Actions(props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    console.log("Ping!")
    setIsLiked(!isLiked);
  };

  return (
    <div className="actions">
      {/* Font Awesome icons */}
      <i className="far fa-comment"></i>
      <i className="fas fa-retweet"></i>
      <i
        className={`far ${isLiked ? 'fas' : 'far'} fa-heart`}
  onClick={handleLike}
      ></i>
      <i className="fas fa-share"></i>
    </div>
  );
}

export default Actions;
