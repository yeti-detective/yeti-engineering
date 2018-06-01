import React from 'react'

const YetiFlashlight = () => (
  <div className="yeti-flashlight">
    <h2>
      <a
        href="https://play.google.com/store/apps/details?id=com.motomorphosis.user.yetiflashlight"
        target="_blank"
        >
        Yeti Flashlight
      </a>
    </h2>
    <div className="yeti-flashlight-words">
      <p>
        I actually just created this app out of frustration. I use an LG Aristo
        and there is no native flashlight app. All of the flashlight apps I could
        find on the Play store came with ads. The last thing someone who needs
        a flashlight wants is to wait 15 seconds to skip an ad before the light
        will come on.
      </p>
      <p>
        If you've ever faced a similar frustration, allow me to offer my solution.
      </p>
      <p>
        You can check it
        out <a href="https://play.google.com/store/apps/details?id=com.motomorphosis.user.yetiflashlight" target="_blank">here...</a>
      </p>
    </div>
    <img
      className="yeti-flashlight-screenshot"
      src="/images/YetiFlashlight.jpg"
    />
  </div>
)


export default YetiFlashlight
