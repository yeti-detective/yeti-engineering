import React from 'react'
import LikeButton from './LikeButton.jsx'

var style = {
        borderRadius: '50%',
        height: 200,
        width: 'auto'
    };

const MyFace = () => (
  <div>
    <img
      style={style}
      title="photo of a handsome man"
      src="/images/TrainSquint.jpg"
    />
    <LikeButton />
    <h3>Like My Beard!</h3>
    <br/>
  </div>
);

export default MyFace;
