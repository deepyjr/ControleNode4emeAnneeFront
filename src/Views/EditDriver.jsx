import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditDriver() {
    let history = useHistory();
    let { id } = useParams();
  
    const [driver, setDriver] = React.useState({
        nom: "",
        prenom: "",
        voiture: "",
        image: "",
    });
  
    const [send, setSend] = React.useState(false);
    const [getValues, setGetValues] = React.useState(true);
  
    React.useEffect(() => {
      const sendValues = () => {
          console.log(driver)
        axios({
          method: "PUT",
          url: "https://calm-bayou-78429.herokuapp.com/driver/" + id,
          headers: { "Content-Type": "application/json" },
          data: driver,
        })
          .then((res) => {
              console.log(res)
            history.replace("/updated/" + id + "/driver");
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
      const getValuesDriver = () => {
        axios({
          method: "GET",
          url: "https://calm-bayou-78429.herokuapp.com/driver/" + id,
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            console.log(res.data);
            setDriver({
              nom: res.data.modele,
              prenom: res.data.marque,
              voiture: res.data.voiture,
              image: res.data.image,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };
      if (getValues) {
        getValuesDriver();
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
                defaultValue={driver.nom}
                onChange={(e) => {
                  setDriver({ ...driver, modele: e.target.value });
                }}
                type="text"
                placeholder="Entrer un nom de voiture"
              />
              <Form.Text className="text-muted">Facultatif</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Marque">
              <Form.Label>Prenom</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setDriver({ ...driver, prenom: e.target.value });
                }}
                defaultValue={driver.prenom}
                type="text"
                placeholder="Entrer une marque de voiture"
              />
              <Form.Text className="text-muted">Facultatif</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Image">
              <Form.Label>Image de la voiture</Form.Label>
              <Form.Control
                defaultValue={driver.image}
                onChange={(e) => {
                  setDriver({ ...driver, image: e.target.value });
                }}
                type="text"
                placeholder="Entrer une url d'image de voiture"
              />
              <Form.Text className="text-muted">Facultatif</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Immatriculation">
              <Form.Label>Immatriculation de la voiture</Form.Label>
              <Form.Control
                defaultValue={driver.immatriculation}
                onChange={(e) => {
                  setDriver({ ...driver, immatriculation: e.target.value });
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

export default EditDriver
