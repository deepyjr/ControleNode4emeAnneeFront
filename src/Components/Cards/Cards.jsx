import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Cards(props) {
  let history = useHistory();

  const deleteFunction = (e, id) => {
    axios({
      method: "DELETE",
      url: "https://calm-bayou-78429.herokuapp.com/car/"+id,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
       console.log(res);
       history.replace("/deleted/"+id);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="cardUnit">
      <Card style={{ width: "18rem", height: "22rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.modele}</Card.Title>
          <Card.Text>
            Crée par : {props.marque} <br />
            <Badge bg="primary">{props.type}</Badge>
          </Card.Text>
          <div className="containerButton">
            <Link to={"/edit/" + props.id}>
              <Button className="firstBtn" variant="primary">
                Edit
              </Button>
            </Link>
              <Button onClick={(e,id)=> deleteFunction(e,props.id)} variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
