import React from 'react';
import PaypalButton from './PaypalButton.jsx';
import JustFollowingUp from './JustFollowingUp.jsx'

var style = {
    textDecoration: "none",
    color: '#318784'
};

function WhatNext(){
    return(
        <div>
            <p>Was that game too simple? I made it at a panera on my lunch break. For free. You are welcome to pay me to make a better game.</p>
            <PaypalButton />
            <JustFollowingUp />
            <p>To witness my powers with a MongoDB deployment, check out my <strong><a style={style} href="https://url-redirect-maker.herokuapp.com/" target="blank">url redirect maker</a></strong>. That's based on an API I made. It validates the URL with npm's 'valid-url' package.</p>
            <p>To add my impending wedding to your Google Calendar, see my <strong><a style={style} href="https://marrybaby.herokuapp.com/" target="blank">save the date</a></strong> page. (Don't tell Julia, she didn't approve that picture.)</p>
            <p>If you've ever wanted an API that will let you get Amazon Wishlist data, <strong><a style={style} href="https://yetis-amazon-wishlist-api.herokuapp.com/" target="blank">I kind of made one.</a></strong></p>
            <p>So there you go. Hire me. Somebody pay me. Please.</p>
            <p>Peace out</p>
        </div>
    );
}

export default WhatNext;