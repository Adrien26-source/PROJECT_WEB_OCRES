import React, {Component} from 'react'
import Produits from './Produits.js'
import imageprofil from './images/employe.png';
import image1 from './images/chien.jpg';
import image2 from './images/chat.jpg';
import image3 from './images/panda.jpg';
import Testventes from './test-ventes.js'
import Testgraphique from './Test-graphiques.js'
import Testobjet from './Test-objet.js'
import Testproduits from './Test-produits.js'
import Testform from './formulaire.js'
import './Bloc-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

class Accueil extends Component {

  state = {
    users: []
  }

  compnentDidMount(){
    axios.get('https://localhost:3000/get-data').then(res => {
      console.log(res);
      this.setState({users: res.data});
    });

  }

  render() {
    return (
    <div>
    <Router>
      <div>
        <Link to="/Menu" className="btn btn-outline-info">Menu</Link>
        <Link to="/Connexion" className="btn btn-outline-info">Connexion</Link>
        <Switch>
          <Route path="/Connexion">
            <Connexion />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
    );
  }
}

function Menu() {
  return (<div>
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Produits imgsrc={imageprofil} textbutton="Se déconnecter" title="Denis Alfonse" description="Connecté en tant que visiteur"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testventes textbutton="Ajouter un animal" title="Liste des animaux disponibles"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testgraphique textbutton="Visualiser" title="Ventes" description="ventes des animaux en €"/>
      </div>
    </div>
  </div>
  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testobjet textbutton="Voir détails" title="Animalerie" description="animaux"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testproduits image1={image1} image2={image2} image3={image3}/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testform textbutton="Voir détails" title="Ventes" description="ventes"/>
      </div>
    </div>
  </div>
</div>
  );
}

function Connexion() {
  return (
    <div>
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
    <div className="bloc text-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Prénom</Form.Label>
        <Form.Control  placeholder="Entrez votre prénom" name="prenom"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control  placeholder="Entrez votre nom" name="nom"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Statut</Form.Label>
          <Form.Control  placeholder="Entrez votre statut" name="statut"/>
          <Form.Text className="text-muted">
            Employe ou Visiteur
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Certification" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Ajout aux employés ou aux visiteurs
        </Button>
      </Form>
    </div>
    </div>
  </div>
</div>
<div className="container-fluid d-flex justify-content-center">
<div className="row">
  <div className="col-md-4 col-xs-12 col-sm-6">
<div className="bloc text-center">

  <div className="bloc-body text-dark">
    <h4 className="bloc-title">Denis Alfonse</h4>
    <p className="bloc-text text-secondary">
        Statut : Employé
    </p>
    <a href="#" className="btn btn-outline-warning">Supprimer</a>
  </div>

  <div className="bloc-body text-dark">
    <h4 className="bloc-title">Eric Albert</h4>
    <p className="bloc-text text-secondary">
        Statut : Visiteur
    </p>
    <a href="#" className="btn btn-outline-warning">Supprimer</a>
  </div>

</div>
</div>
</div>
</div>
</div>
);
}

export default Accueil;