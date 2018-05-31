import React from 'react'
import LikeButton from './LikeButton.jsx'

var style = {
        borderRadius: '50%',
        marginTop: 60,
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
  </div>
);

export default MyFace;
