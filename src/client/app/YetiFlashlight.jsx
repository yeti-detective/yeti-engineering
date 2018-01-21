import React from 'react'

export default function YetiFlashlight () {
    return (
        <div>
            <h2>App Development</h2>
            <div style={{textAlign: 'left', padding: 5}}>
                <p>
                    What else am I capable of? What am I <strong><em>NOT</em></strong> capable of?!
                </p>
                <p>
                    One dark morning, trying to find my socks in the dark with my Android's 3rd party flashlight app, I was annoyed by the ads. On the flashlight.
                </p>
                <p>
                    Flashlights do not need ads.
                </p>
                <p>
                    So I made my own Android flashlight app. It's not much, but it gave me experience in publishing an APK on the Google Play store.
                </p>
                <p>
                    You can check it out <a href="https://play.google.com/store/apps/details?id=com.motomorphosis.user.yetiflashlight" target="_blank">here...</a>
                </p>
            </div>
            <img style={style} src="https://dl.dropbox.com/s/8e51muj39wsa483/YetiFlashlight.jpg?dl=0" />
        </div>    
    );
}

const style = {
    height: 400,
    width: 'auto'
};