import React from 'react';
import './Bloc-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Testform = props => {
  return(
    <div className="bloc text-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Rechercher l'animal souhaité</Form.Label>
        <Form.Control type="email" placeholder="Quel animal voulez vous ?" />
        </Form.Group>
        <br>
        </br>
        <Form.Group>
        <Button variant="danger" type="submit">
          Rechercher 
        </Button>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <br>
        </br>
        <Form.Label>Rechercher le vendeur le plus proche</Form.Label>
        <Form.Control type="email" placeholder="Où vivez vous?" />
        </Form.Group>
        <br>
        </br>
        <Button variant="danger" type="submit">
          Rechercher 
        </Button>
        <br>
        </br>
        <Form.Group controlId="formBasicPassword">
        <br>
        </br>
          <Form.Label>Rechercher par le nom du vendeur</Form.Label>
          <Form.Control type="email" placeholder="Entrez le nom du Vendeur" />
        </Form.Group>
        <br>
        </br>
        <Button variant="danger" type="submit">
          Rechercher
        </Button>
      </Form>
    </div>
  );
}

export default Testform;