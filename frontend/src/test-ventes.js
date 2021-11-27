import React from 'react';
import './Bloc-style.css';
import Ventes from './ventes.js'
import Form from 'react-bootstrap/Form';

const Testventes = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Ventes />
      </div>
      <div className="bloc-body text-dark">
        <h4 className="bloc-title">{props.title}</h4>
        <p className="bloc-text text-secondary">
            {props.description}
        </p>
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Entrez le nom de l'animal" />
        <Form.Text className="text-muted">
        <br>                                                                                             
        </br>  
        <br>                                                                                             
        </br>                                                                                                                         
        </Form.Text>
        <a href="#" className="btn btn-outline-danger">{props.textbutton}</a>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Testventes;