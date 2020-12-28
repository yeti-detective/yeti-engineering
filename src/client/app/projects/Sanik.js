import React from "react";

const Sanik = () => (
  <section className="sanik">
    <h2>
      <a href="https://yeti-detective.github.io/ry_skim/" target="_blank">
        Sanik the Skyhog
      </a>
    </h2>
    <section className="sanik-body">
      <a href="https://yeti-detective.github.io/ry_skim/" target="_blank">
        <img src="/images/sanik_skyhog.png" className="sanik-screenshot" />
      </a>
      <section className="sanik-words">
        <p>
          Sanik the Skyhog is another personal project. I used some of the
          principals I'd learned in constructing the SVG platformer above, but
          this time I wanted to implement it in vanilla JavaScript with no
          helper libraries.
        </p>
        <p>
          I used HTML5 Canvas for the game's screen. The sprites are from{" "}
          <a href="https://www.spriters-resource.com/">spriters-resource</a>.
          All of the moving characters are obviously sprites, but the scrolling
          background is as well.
        </p>
        <p>
          I combined{" "}
          <a
            href="https://en.wikipedia.org/wiki/Object-oriented_programming"
            target="_blank"
          >
            OOP principals
          </a>{" "}
          and functional programming principals in making this game. The
          characters and environment are objects that 'know' their own position,
          velocity, etc. but the physics are processed by running a function
          each time the game loop runs. Data that is meant to represent an
          object is modeled as an object, and the "forces" of the environment
          are represented as the processes defined in the physics function.
        </p>
        <p>
          tl:dr; I wanted to make a mashup of Super Mario, Sonic the Hedgehog, &
          Pac-Man so I did.{" "}
          <a href="https://github.com/yeti-detective/ry_skim">
            check out the code
          </a>
          .
        </p>
      </section>
    </section>
    <hr />
  </section>
);

export default Sanik;
