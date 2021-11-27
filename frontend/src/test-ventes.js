import React from 'react';
import './Bloc-style.css';
import Ventes from './ventes.js'

const Testventes = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Ventes />
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-secondary">
            {props.description}
        </p>
        <a href="#" className="btn btn-outline-danger">{props.textbutton}</a>
      </div>
    </div>
  );
}

export default Testventes;