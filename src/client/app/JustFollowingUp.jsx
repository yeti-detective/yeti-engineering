import React from 'react'

const JustFollowingUp = () => (
  <div className="just-following-up">
    <h2>
      <a href="http://jfollingup.com" target="_blank">
        Just Following Up...
      </a>
    </h2>
    <div className="just-following-up-container">
      <section className="jfu-left-pane">
        <a href="http://jfollingup.com" target="_blank">
          <img className="jfu-screenshot" src="/images/JustFollowingUp.png"/>
        </a>
      </section>
      <section className="jfu-pane jfu-right-pane">
        <p>
          Just Following Up is an original creation by Motomorphosis Industries.
          I have a lot of creative friends who work as freelance artists but have
          a hard time keeping track of who owes them money.
        </p>
        <p>
          This app allows users to authenticate with Facebook, Google or Twitter as
          well as an email address by way of the <a href="https://auth0.com/"
          target="_blank">Auth0 API</a>. On first login, they user is prompted to
          enter their company information. They can then go on to track customers,
          invoices and due dates.
        </p>
        <p>
          The tech stack for Just Following Up on the web consists of a Node Express
          server connected by a JavaScript client to a MongoDB database hosted on
          <a href="https://mlab.com/" target="_blank">Mlab</a>, and a React-powered
          web client on the frontend.
        </p>
      </section>
    </div>
    <br />
    <h5>Available on Google Play</h5>
    <a
      href='https://play.google.com/store/apps/details?id=com.justfollowingup&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
      target="_blank">
      <img
        style={{width: 200}}
        title='Get it on Google Play'
        src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
      />
    </a>
    <section className="jfu-native grid-daddy">
      <div className="col col-1-3 native-words">
        <p>
          The Android version of Just Following Up hits the same backend server as
          the web app, so a user will be logging into the same account whether it's
          from a browser or their mobile. The front end was built in React Native,
          but the final APK was produced in Android Studio and uploaded to the Play
          store through the Google Play Console.
        </p>
      </div>
      <div className="col col-2-3">
        <img src="/images/NativeJFU.png" className="jfu-native-screenshot" />
      </div>
    </section>
    <hr />
  </div>
)

export default JustFollowingUp
