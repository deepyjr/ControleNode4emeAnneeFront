import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddCar() {
    let history = useHistory();
  const [car, setCar] = React.useState({
    modele: "",
    marque: "",
    immatriculation: "",
  });
  const [send, setSend] = React.useState(false);

  React.useEffect(() => {
    const sendValues = () => {
      axios.post('/car', car)
      .then(function (response) {
        history.replace("/created");
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    if (send) {
      sendValues();
      setSend(false);
    }
  }, [send]);

  return (
    <div className="form-create">
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setSend(true);
          }}
        >
          <Form.Group className="mb-3" controlId="Modele">
            <Form.Label>Modèle de la voiture</Form.Label>
            <Form.Control
              onChange={(e) => {setCar({ ...car, modele: e.target.value })}}
              type="text"
              placeholder="Entrer un nom de voiture"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="Marque"
          >
            <Form.Label>Marque de la voiture</Form.Label>
            <Form.Control
            onChange={(e) => {setCar({ ...car, marque: e.target.value })}}
              type="text"
              placeholder="Entrer une marque de voiture"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="Immatriculation"
          >
            <Form.Label>Immatriculation de la voiture</Form.Label>
            <Form.Control
            onChange={(e) => {setCar({ ...car, immatriculation: e.target.value })}}
              type="text"
              placeholder="Entrer une immatriculation de voiture"
            />
            <Form.Text className="text-muted">Obligatoire</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddCar;
