import React from 'react'
import JustFollowingUp from './projects/JustFollowingUp.jsx'
import SoundClone from './projects/SoundClone.jsx'
import Sanik from './projects/Sanik.jsx'
import YetiFlashlight from './projects/YetiFlashlight.jsx'

const Projects = () => (
  <section className="projects">
    <h1>Portfolio</h1>
    <hr />
    <div className="projects-grid">
      <SoundClone />
      <Sanik />
      <JustFollowingUp />
      <YetiFlashlight />
    </div>
  </section>
)

export default Projects
