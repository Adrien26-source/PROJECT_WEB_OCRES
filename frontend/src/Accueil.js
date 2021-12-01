import React, {Component} from 'react'
import Produits from './Produits.js'
import Produits2 from './Produits2.js'
import imageprofil from './images/employe.png';
import imageprofil2 from './images/visiteur.PNG';
import image1 from './images/chien.jpg';
import image2 from './images/chat.jpg';
import image3 from './images/panda.jpg';
import Testventes from './test-ventes.js'
import Testventes2 from './test-ventes2.js'
import Testgraphique from './Test-graphiques.js'
import Testgraphique2 from './Test-graphiques2.js'
import Testobjet from './Test-objet.js'
import Testobjet2 from './Test-objet2.js'
import Testproduits from './Test-produits.js'
import Testproduits2 from './Test-produits2.js'
import Testform from './formulaire.js'
import Testform2 from './formulaire2.js'
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
        <Link to="/Connexion" className="btn btn-outline-info">Page 1 : Connexion</Link>
        <Link to="/MenuVisiteur" className="btn btn-outline-info">Page 2.1 : MenuVisiteur</Link>
        <Link to="/MenuEmploye" className="btn btn-outline-info">Page 2.2 : MenuEmploye</Link>
        <h2 className="bloc-body text-warning">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Animal Exchange</h2>
        <img src="https://www.purina.fr/sites/default/files/2018-02/4_6.jpg" alt="imageAccueil" className="bloc-img-left imageAccueil"/>
        <h2 className="bloc-body text-warning">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        Adrien Cherqui Naoki Arnaud TD04 ING4 OCRES</h2>
        <Switch>
          <Route path="/Connexion">
            <Connexion />
          </Route>
          <Route path="/MenuVisiteur">
            <MenuVisiteur />
          </Route>
          <Route path="/MenuEmploye">
            <MenuEmploye />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
    );
  }
}

function MenuVisiteur() {
  return (<div>
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Produits imgsrc={imageprofil} textbutton="Se déconnecter" title="Denis Alfonse" description="Connecté en tant que visiteur"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testventes textbutton="Ajouter un animal" title="Liste des animaux disponibles" description="Le nombre disponible par type d'animal"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testgraphique textbutton="Modifier" title="Achats" description="Achats des animaux en €"/>
      </div>
    </div>
  </div>
  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testobjet textbutton="Voir détails" title="Tableau du poids des animaux" description="Tableau"/>
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

function MenuEmploye() {
  return (<div>
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Produits2 imgsrc={imageprofil2} textbutton="Se déconnecter" title="Denis Alfonse" description="Connecté en tant qu'Employé"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testventes2 textbutton="Mettre en vente" title="Liste des animaux mis en vente" description="Le nombre et le type d'animaux mis en vente"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testgraphique2 textbutton="Modifier" title="Ventes" description="Ventes des animaux en €"/>
      </div>
    </div>
  </div>
  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testobjet2 title="Diagramme circulaire de la répartition des races d'un type d'animal" description="Diagramme circulaire"/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testproduits2 image1={image1} image2={image2} image3={image3}/>
      </div>
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Testform2 textbutton="Voir détails" title="Ventes" description="ventes"/>
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
        <h4 className="bloc-title">Log in :</h4>
        <br>
        </br>
        <Form.Label>Nom :</Form.Label>
        <Form.Control  placeholder="Entrez votre Nom" name="Nom"/>
        </Form.Group>
        <br>
        </br>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Prénom :</Form.Label>
        <Form.Control  placeholder="Entrez votre Prenom" name="Prenom"/>
        </Form.Group>
        <br>
        </br>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Type :</Form.Label>
          <Form.Control  placeholder="Visiteur/Employe" name="Visiteur/Employe"/>
        </Form.Group>
        <br>
        </br>
        <Button variant="danger" type="submit">
          Se connecter
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

        <Form>
        <Form.Group controlId="formBasicEmail">
        <h4 className="bloc-title">Sign in :</h4>
        <br>
        </br>
        <Form.Label>Nom :</Form.Label>
        <Form.Control  placeholder="Entrez votre Nom" name="Nom"/>
        </Form.Group>
        <br>
        </br>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Prénom :</Form.Label>
        <Form.Control  placeholder="Entrez votre Prenom" name="Prenom"/>
        </Form.Group>
        <br>
        </br>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Adresse Mail :</Form.Label>
          <Form.Control  placeholder="Entrez votre mail" name="AdresseMail"/>
        </Form.Group>
        <br>
        </br>
        <Button variant="danger" type="submit">
          Créer un compte
        </Button>
      </Form>

</div>
</div>
</div>
</div>
</div>
);
}

export default Accueil;