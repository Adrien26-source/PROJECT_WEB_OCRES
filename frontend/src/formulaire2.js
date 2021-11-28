import React from 'react';
import './Bloc-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Testform2 = props => {
  return(
    <div className="bloc text-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Modifier et remplir le profil de l'animal</Form.Label>
        <Form.Control type="email" placeholder="Le nom de votre animal" />
        </Form.Group>
        <br>
        </br>
        <Form.Group>
        <Button variant="primary" type="submit">
          Modifier profil 
        </Button>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <br>
        </br>
        <Form.Label>Supprimer l'animal en vente par son nom</Form.Label>
        <Form.Control type="email" placeholder="Le nom de votre animal" />
        </Form.Group>
        <br>
        </br>
        <Button variant="primary" type="submit">
        Supprimer 
        </Button>
        <br>
        </br>
        <Form.Group controlId="formBasicPassword">
        <br>
        </br>
          <Form.Label>Enlevez tous les animaux de même type</Form.Label>
          <Form.Control type="email" placeholder="Le type de votre animal" />
        </Form.Group>
        <br>
        </br>
        <Button variant="primary" type="submit">
        Supprimer
        </Button>
      </Form>
    </div>
  );
}

export default Testform2;