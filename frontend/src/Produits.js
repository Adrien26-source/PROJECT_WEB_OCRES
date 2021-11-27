import React from 'react';
import './Bloc-style.css';

const Produits = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="bloc-img-top profil"/>
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

export default Produits;