import React from 'react';
import './Bloc-style.css';
import Graphique from './graphiques.js'

const Testgraphique = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Graphique />
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-secondary">
            {props.description}
        </p>
        <a href="#" className="btn btn-outline-success">{props.textbutton}</a>
      </div>
    </div>
  );
}

export default Testgraphique;