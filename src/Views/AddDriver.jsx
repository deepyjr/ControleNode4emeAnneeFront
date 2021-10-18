import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddDriver() {
  let history = useHistory();
  const [driver, setDriver] = React.useState({
    nom: "",
    prenom: "",
    voiture: "",
    image: "",
  });
  const [send, setSend] = React.useState(false);
  const [getValues, setGetValues] = React.useState(true);
  const [cars, setCars] = React.useState();

  React.useEffect(() => {
    const sendValues = () => {
      axios({
        method: "POST",
        url: "https://calm-bayou-78429.herokuapp.com/driver",
        headers: { "Content-Type": "application/json" },
        data: driver,
      })
        .then((res) => {
          history.replace("/created/" + res.data._id + "/driver");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (send) {
      sendValues();
      setSend(false);
    }
  }, [send]);

  React.useEffect(() => {
    const getValues = () => {
      axios({
        method: "GET",
        url: "https://calm-bayou-78429.herokuapp.com/cars",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          setCars(
            res.data.map((value, index) => {
              return (
                <option>
                  {value.marque +
                    " " +
                    value.modele +
                    " - " +
                    value.immatriculation}
                </option>
              );
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (getValues) {
      getValues();
      setGetValues(false);
    }
  }, [getValues]);

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
            <Form.Label>Nom</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDriver({ ...driver, nom: e.target.value });
              }}
              type="text"
              placeholder="Entrer un nom "
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Marque">
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDriver({ ...driver, prenom: e.target.value });
              }}
              type="text"
              placeholder="Entrer un prenom"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Image">
            <Form.Label>Image de la voiture</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDriver({ ...driver, image: e.target.value });
              }}
              type="text"
              placeholder="Entrer une url d'image"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Immatriculation">
            <Form.Label>Immatriculation de la voiture</Form.Label>
            <Form.Select
              onChange={(e) => {
                setDriver({
                  ...driver,
                  voiture: {
                    immatriculation: e.target.value.split("-").pop(),
                  },
                });
              }}
              required
              placeholder="Selectionner une immatriculation de voiture"
            >
              <option>Pas de voiture</option>
              {cars}
            </Form.Select>
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

export default AddDriver;
