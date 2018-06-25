import React from 'react';
import FixYourCity from './projects/FixYourCity';
import JustFollowingUp from './projects/JustFollowingUp';
import RubyChess from './projects/RubyChess';
import SoundClone from './projects/SoundClone';
import Sanik from './projects/Sanik';
import YetiFlashlight from './projects/YetiFlashlight';

const Projects = () => (
  <section className="projects">
    <h1>Portfolio</h1>
    <hr />
    <div className="projects-grid">
      <SoundClone />
      <Sanik />
      <RubyChess />
      <FixYourCity />
      <JustFollowingUp />
      <YetiFlashlight />
    </div>
  </section>
);

export default Projects;
