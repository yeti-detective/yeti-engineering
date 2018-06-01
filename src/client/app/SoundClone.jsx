import React from 'react';

const SoundClone = props => (
    <div>
        <h2>
          <a href="https://chris-b-soundclone.herokuapp.com" target="_blank">
            SoundClone
          </a>
        </h2>
        <a href="https://chris-b-soundclone.herokuapp.com" target="_blank">
          <img
            style={{width: '80%', height: 'auto'}}
            src="/images/SoundClone.png"
            title="screenshot of landing page of soundclone"
          />
        </a>
        <div className="project-explanation">
          <p>
            SoundClone, inspired by <a href="https://www.soundcloud.com/" target="_blank">
            SoundCloud</a>, is a full stack app I developed as a student project
            at <a href="https://appacademy.io" target="_blank">App Academy</a>
            NYC.
          </p>
          <p>
            The backend uses Ruby on Rails to deploy a PostgreSQL database integrated
            with an AWS S3 instance for media attachments, a Puma server handles
            the HTTP traffic, and Rails' domain specific language Jbuilder creates
            the JSON views that power the app's API.
          </p>
          <p>
            User authentication is managed by Ruby's BCrypt library. Password digests
            (hashed and salted representations of the user's password) are generated
            with the Blowfish encryption algorithm and associated with the browser
            session token sent with each HTTP request. When a user logs out, a
            random token is stored in their browser, and the associated token
            in the database is set to a nil value.
          </p>
          <p>
            On the frontend, user experience is enhanced by React. An HTML document
            is sent only on the initial HTTP request. Components are rendered from
            JavaScript classes, and application state is tracked in a Redux store.
            Every component is able to fetch its required data from the backend API
            using Ajax requests, and meaninful URLs are generated and interpreted
            by React-Router so a user can post a link to a specific view and the
            same view will render for other users who click that link.
          </p>
        </div>
        <hr />
    </div>
);

export default SoundClone;
