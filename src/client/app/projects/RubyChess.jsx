import React from 'react'

const RubyChess = () => (
  <section className="ruby-chess">
    <h2>
      <a
        href="https://github.com/yeti-detective/RubyChess"
        target="_blank"
        >
        Ruby Chess
      </a>
    </h2>
    <div className="ruby-chess-screenshots">
      <a
        href="https://github.com/yeti-detective/RubyChess"
        target="_blank"
        >
        <img src="/images/chess_board.png"/>
        <img src="/images/chess_board2.png"/>
      </a>
    </div>
    <div className="ruby-chess-words">
      <p>
        This is a pure-Ruby project <em>(still in development.)</em> The goal
        is to create a computer chess opponent that models a tree data structure
        where the first generation of leaves is each possible move it could
        execute from the current state, the next generation is every possible
        response the opponent could produce, and so on.
      </p>
      <p>
        While creating this tree structure, it will
        use <a href="https://en.wikipedia.org/wiki/Breadth-first_search"
        target="_blank">depth-first search</a> to find the shortest branch that
        ends in victory, and then pursue the course of action defined by that
        branch.
      </p>
      <p>
        I hope to gain some insight into AI in the pursuit of this project.
        Watch <a href="https://github.com/yeti-detective/RubyChess">this
        space</a> for updates.
      </p>
    </div>
  </section>
)

export default RubyChess
