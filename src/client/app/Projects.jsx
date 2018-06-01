import React from 'react'
import JustFollowingUp from './projects/JustFollowingUp.jsx'
import SoundClone from './projects/SoundClone.jsx'
import YetiFlashlight from './projects/YetiFlashlight.jsx'
import Sanik from './projects/Sanik.jsx'

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
