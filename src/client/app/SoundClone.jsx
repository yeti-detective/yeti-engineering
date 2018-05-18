import React from 'react';

const SoundClone = props => (
    <div>
        <h2>I Learned Ruby!</h2>
        <p>In March 2018 I attended an exclusive NYC code bootcamp & learned Ruby, Rails, Postgresql, and other skills. Get at me.</p>
        <p>Check out my full-stack project, Rails backend, React frontend. It's a clone of <a href="www.soundcloud.com" target="_blank">SoundCloud</a></p>
        <p>I call it <a href="https://chris-b-soundclone.herokuapp.com" target="_blank">SoundClone</a> (not very original, but it's too late to change it now.)</p>
        <img 
            style={{width: '80%', height: 'auto'}}
            src="https://dl.dropbox.com/s/548urphtr7gly2e/20180518LandingPage.png?dl=0" 
            title="screenshot of landing page of soundclone" 
        />
        <p>GitHub repo <a href="https://github.com/yeti-detective/SoundClone" target="_blank">here</a></p>
    </div>    
);

export default SoundClone;