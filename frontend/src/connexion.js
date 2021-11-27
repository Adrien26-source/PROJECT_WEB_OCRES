import React, {Component} from 'react'
import Produits from './Produits.js'
import imageprofil from './images/profil.png';
import './Bloc-style.css';

class Connexion extends Component {
  render() {
    return (
    <div>
      <a href="./connexion.js" className="btn btn-outline-success">Connexion</a>
    </div>
    );
  }
}

export default Connexion;