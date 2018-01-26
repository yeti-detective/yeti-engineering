import React from 'react'

const style = {
    
}

export default function JustFollowingUp () {
    return (
        <div style={style}>
            <h4>Need someone who can implement login? Here's a fun little app I made to help freelancers track their pending invoices. Login is handled through the Auth0 API</h4>
            <h5>Available on Google Play</h5>
            <a href='https://play.google.com/store/apps/details?id=com.justfollowingup&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank"><img style={{width: 200}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
            <h5>(Coming soon to iOS)</h5>
            <a href="http://jfollowingup.com" target="_blank"><img style={{borderRadius: "5px"}} src="https://dl.dropbox.com/s/28k7po2vjxil7yh/JFU.PNG?dl=0" /></a>
            <h5>(yes it is hosted on Heroku on the free plan because I have no funding, please pay me)</h5>
        </div>    
    )
}