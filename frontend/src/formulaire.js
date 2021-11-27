import React from 'react';
import './Bloc-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Testform = props => {
  return(
    <div className="bloc text-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Rechercher un animal</Form.Label>
        <Form.Control type="email" placeholder="Entrez le nom de l'animal" />
        <Form.Text className="text-muted">
          Les animaleries
        </Form.Text>
        </Form.Group>
        <Form.Group>
        <Button variant="success" type="submit">
          Rechercher
        </Button>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Rechercher un Employé</Form.Label>
          <Form.Control type="email" placeholder="Entrez le nom de l'employé" />
          <Form.Text className="text-muted">
            Tous nos employés sont certifiés.
          </Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit">
          Rechercher
        </Button>
      </Form>
    </div>
  );
}

export default Testform;