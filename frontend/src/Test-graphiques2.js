import React from 'react';
import './Bloc-style.css';
import Graphique2 from './graphiques2.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Testgraphique2 = props => {
  return(
    <div className="bloc text-center">
      <div className="overflow">
        <Graphique2 />
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
        <Form.Control type="email" placeholder="Année du graphe (AAAA)" />
        <Form.Text className="text-muted"> 
        <br>                                                                                             
        </br>                                                                                                                         
        </Form.Text>
        <Button variant="primary" type="submit">
          Modifier
        </Button>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Testgraphique2;