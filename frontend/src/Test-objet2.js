import React from 'react';
import './Bloc-style.css';
import Objet2 from './objet2.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Testobjet2 = props => {
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
        <Objet2 />
      </div>
      <h5 className="bloc-body text-danger">30% : Golden Retriver</h5>
      <h5 className="bloc-body text-primary">40% : Chiwawa</h5>
      <h5 className="bloc-body text-black">20% : Toy Poodle</h5>
      <h5 className="bloc-body text-success">10% : Husky de Sibérie</h5>
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Nom de l'animal" />
        </Form.Group>
        <br>
        </br>
        <Form.Group>
        <Button variant="success" type="submit">
        Changer le type d'animal
        </Button>
        <br>
        </br>
        <br>
        </br>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Testobjet2;