var React = require('react');

var style = {
        borderRadius: '50%',
        marginTop: 60,
        height: 200,
        width: 'auto'
    };

const MyFace = () => (
  <img
    style={style}
    title="photo of a handsome man"
    src="/images/TrainSquint.jpg"
  />
);

export default MyFace;
