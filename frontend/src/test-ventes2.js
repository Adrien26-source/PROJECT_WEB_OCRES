import React from 'react';
import './Bloc-style.css';
import Ventes2 from './ventes2.js'
import Form from 'react-bootstrap/Form';

const Testventes2 = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Ventes2 />
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
        <Form.Control type="email" placeholder="Nom de l'animal"/>
        <br>                                                                                             
        </br>  
        <Form.Control type="email" placeholder="Type de l'animal"/>
        <br>                                                                                             
        </br>  
        <Form.Control type="email" placeholder="Couleur de l'animal"/>
        <Form.Text className="text-muted">
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

export default Testventes2;