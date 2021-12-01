import React from 'react';
import './Bloc-style.css';
import Ventes from './ventes.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Testventes = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Ventes />
      </div>
      <div className="bloc-body text-danger">
      <br>                                                                                             
        </br>  
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-primary">
            {props.description}
        </p>
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Entrez le nom de l'animal" />
        <Form.Text className="text-muted">
        <br>                                                                                             
        </br>                                                                                                                          
        </Form.Text>
        <Button variant="danger" type="submit">
          Ajouter un animal
        </Button>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Testventes;