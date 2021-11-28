import React from 'react';
import './Bloc-style.css';

const Testproduits2 = props => {
  return(
    <div className="bloc text-center">
      <br>
        </br>
      <h4 className="bloc-title text-danger">Les nouvelles mises en vente :</h4>
      <br>
        </br>
      <div className="overflow">
        <img src={props.image1} alt="image1" className="bloc-img-top photos"/>
      </div>
      <div className="bloc-body text-primary">
      <h5 className="bloc-title">Nom : Pichoune</h5>
      <h5 className="bloc-title">Sexe : Male</h5>
      <h5 className="bloc-title">Age : 2 ans </h5>
      <h5 className="bloc-title">Type : Chien Golden Retriever</h5>
        <h4 className="bloc-title">Prix : 1500€</h4>
        <p className="bloc-text text-primary">
            Chien
        </p>
        <a href="#" className="btn btn-outline-primary">Supprimer</a>
      </div>
      <div className="overflow">
        <img src={props.image2} alt="image2" className="bloc-img-top photos"/>
      </div>
      <div className="bloc-body text-primary">
      <h5 className="bloc-title">Nom : Chouca</h5>
      <h5 className="bloc-title">Sexe : Femelle</h5>
      <h5 className="bloc-title">Age : 3 mois </h5>
      <h5 className="bloc-title">Type : Chat tigré</h5>
        <h4 className="bloc-title">Prix : 1000€</h4>
        <p className="bloc-text text-primary">
            Chat
        </p>
        <a href="#" className="btn btn-outline-primary">Supprimer</a>
      </div>
      <div className="overflow">
        <img src={props.image3} alt="image3" className="bloc-img-top photos"/>
      </div>
      <div className="bloc-body text-primary">
      <h5 className="bloc-title">Nom : Baba</h5>
      <h5 className="bloc-title">Sexe : Male</h5>
      <h5 className="bloc-title">Age : 5 ans </h5>
      <h5 className="bloc-title">Type : Panda affamé</h5>
        <h4 className="bloc-title">Prix : 6000€</h4>
        <p className="bloc-text text-primary">
            Panda
        </p>
        <a href="#" className="btn btn-outline-primary">Supprimer</a>
        <br>
        </br>
        <br>
        </br>
        <a href="#" className="btn btn-outline-warning">Voir plus de résulats</a>
      </div>
    </div>
  );
}

export default Testproduits2;