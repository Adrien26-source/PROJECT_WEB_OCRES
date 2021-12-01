import React from 'react';
import './Bloc-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Produits = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <br> 
        </br>
      <h3 className="bloc-body text-danger">Profil : </h3>
        <img src={props.imgsrc} alt="image1" className="bloc-img-top profil"/>
      </div>
      <div className="bloc-body text-danger">
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-primary">
            {props.description}
        </p>
        <br> 
        </br>
        <Button variant="danger" type="submit">
          Se déconnecter
        </Button>
      </div>
    </div>
  );
}

export default Produits;