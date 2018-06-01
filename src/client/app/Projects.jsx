import React from 'react'
import JustFollowingUp from './JustFollowingUp.jsx'
import SoundClone from './SoundClone.jsx'
import YetiFlashlight from './YetiFlashlight.jsx'
import Sanik from './Sanik.jsx'

const Projects = () => (
  <section className="projects">
    <h1>Portfolio</h1>
    <hr />
    <div className="projects-grid">
      <SoundClone />
      <Sanik />
      <JustFollowingUp />
    </div>
  </section>
)

export default Projects
