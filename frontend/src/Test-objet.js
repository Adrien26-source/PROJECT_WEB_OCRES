import React from 'react';
import './Bloc-style.css';
import Radars from './objet.js'

const Testobjet = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Radars />
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-secondary">
            {props.description}
        </p>
        <a href="#" className="btn btn-outline-warning">{props.textbutton}</a>
      </div>
    </div>
  );
}

export default Testobjet;