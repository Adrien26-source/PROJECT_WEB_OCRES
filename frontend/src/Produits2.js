import React from 'react';
import './Bloc-style.css';

const Produits2 = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <br> 
        </br>
      <h3 className="bloc-body text-danger">Profil : </h3>
        <img src={props.imgsrc} alt="image1" className="bloc-img-top profil2"/>
      </div>
      <div className="bloc-body text-danger">
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-primary">
            {props.description}
        </p>
        <br> 
        </br>
        <a href="#" className="btn btn-outline-danger">{props.textbutton}</a>
      </div>
    </div>
  );
}

export default Produits2;