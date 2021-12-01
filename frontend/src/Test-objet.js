import React from 'react';
import './Bloc-style.css';
import Objet from './objet.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Testobjet = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
      <div className="bloc-body text-danger">
      <h4 className="bloc-title">{props.title}</h4>
        <br>
        </br>
        <p className="bloc-text text-primary">
            {props.description}
        </p>
        <Objet />
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Nom de l'animal" />
        </Form.Group>
        <br>
        </br>
        <Form.Group>
        <Button variant="success" type="submit">
          Ajouter un animal
        </Button>
        <br>
        </br>
        <br>
        </br>
        <Button variant="danger" type="submit">
          Retirer un animal 
        </Button>
        <br>
        </br>
        <br>
        </br>
        <Button variant="warning" type="submit">
          Voir détails 
        </Button>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Testobjet;