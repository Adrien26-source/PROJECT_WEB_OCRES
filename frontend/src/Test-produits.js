import React from 'react';
import './Bloc-style.css';

const Testproduits = props => {
  return(
    <div className="bloc text-center">
      <h4 className="bloc-title"></h4>
      <h4 className="bloc-title">Animalerie</h4>
      <div className="overflow">
        <img src={props.image1} alt="image1" className="bloc-img-top photos"/>
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">2100€</h4>
        <p className="bloc-text text-secondary">
            Chien
        </p>
        <a href="#" className="btn btn-outline-warning">Voir</a>
      </div>
      <div className="overflow">
        <img src={props.image2} alt="image2" className="bloc-img-top photos"/>
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">4000€</h4>
        <p className="bloc-text text-secondary">
            Chat
        </p>
        <a href="#" className="btn btn-outline-warning">Voir</a>
      </div>
      <div className="overflow">
        <img src={props.image3} alt="image3" className="bloc-img-top photos"/>
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">8000€</h4>
        <p className="bloc-text text-secondary">
            Panda
        </p>
        <a href="#" className="btn btn-outline-warning">Details</a>
      </div>
    </div>
  );
}

export default Testproduits;