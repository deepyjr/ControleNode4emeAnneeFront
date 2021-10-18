import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditCar() {
  let history = useHistory();
  let { id } = useParams();

  const [car, setCar] = React.useState({
    modele: "",
    marque: "",
    immatriculation: "",
    image: "",
  });

  const [send, setSend] = React.useState(false);
  const [getValues, setGetValues] = React.useState(true);

  React.useEffect(() => {
    const sendValues = () => {
        console.log(car)
      axios({
        method: "PUT",
        url: "https://calm-bayou-78429.herokuapp.com/car/" + id,
        headers: { "Content-Type": "application/json" },
        data: car,
      })
        .then((res) => {
            console.log(res)
          history.replace("/updated/" + id + "/car");
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
        url: "https://calm-bayou-78429.herokuapp.com/car/" + id,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log(res.data);
          setCar({
            modele: res.data.modele,
            marque: res.data.marque,
            immatriculation: res.data.immatriculation,
            image: res.data.image,
          });
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
            <Form.Label>Modèle de la voiture</Form.Label>
            <Form.Control
              defaultValue={car.modele}
              onChange={(e) => {
                setCar({ ...car, modele: e.target.value });
              }}
              type="text"
              placeholder="Entrer un nom de voiture"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Marque">
            <Form.Label>Marque de la voiture</Form.Label>
            <Form.Control
              onChange={(e) => {
                setCar({ ...car, marque: e.target.value });
              }}
              defaultValue={car.marque}
              type="text"
              placeholder="Entrer une marque de voiture"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Image">
            <Form.Label>Image de la voiture</Form.Label>
            <Form.Control
              defaultValue={car.image}
              onChange={(e) => {
                setCar({ ...car, image: e.target.value });
              }}
              type="text"
              placeholder="Entrer une url d'image de voiture"
            />
            <Form.Text className="text-muted">Facultatif</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Immatriculation">
            <Form.Label>Immatriculation de la voiture</Form.Label>
            <Form.Control
              defaultValue={car.immatriculation}
              onChange={(e) => {
                setCar({ ...car, immatriculation: e.target.value });
              }}
              type="text"
              required
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

export default EditCar;
