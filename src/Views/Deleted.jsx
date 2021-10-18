import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";
import Card from "react-bootstrap/Card";

function Deleted(props) {
  return (
    <div className="containerGlobalDeleted">
      <div className="containerDeleted">
        <Card body>
          <p>Voiture bien supprimée !</p>
          <Link to={"/"}>
            <Button className="firstBtn" variant="primary">
              Retourner sur la page
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Deleted;
