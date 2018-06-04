import React from 'react'
import JustFollowingUp from './projects/JustFollowingUp'
import RubyChess from './projects/RubyChess'
import SoundClone from './projects/SoundClone'
import Sanik from './projects/Sanik'
import YetiFlashlight from './projects/YetiFlashlight'

const Projects = () => (
  <section className="projects">
    <h1>Portfolio</h1>
    <hr />
    <div className="projects-grid">
      <SoundClone />
      <Sanik />
      <RubyChess />
      <JustFollowingUp />
      <YetiFlashlight />
    </div>
  </section>
)

export default Projects
