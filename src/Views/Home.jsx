import React from "react";
import Cards from "../Components/Cards/Cards";
import CardsDrivers from "../Components/Cards/CardsDrivers";
import "../App.css";
import axios from "axios";

function Home() {
  const [body, setBody] = React.useState();
  const [body2, setBody2] = React.useState();
  const [getValue, setGetValue] = React.useState(true);

  React.useEffect(() => {
    const buildCards = () => {
      axios({
        method: "GET",
        url: "https://calm-bayou-78429.herokuapp.com/cars",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          setBody(
            res.data.map((item, index) => {
              return (
                <Cards
                  className="card"
                  id={item._id}
                  modele={item.modele}
                  marque={item.marque}
                  image={item.image}
                  immatriculation={item.immatriculation}
                ></Cards>
              );
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (getValue) {
      buildCards();
      setGetValue(false);
    }
  }, [body]);

  React.useEffect(() => {
    const buildCards = () => {
      axios({
        method: "GET",
        url: "https://calm-bayou-78429.herokuapp.com/drivers",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          setBody2(
            res.data.map((item, index) => {
              return (
                <CardsDrivers
                  className="card"
                  id={item._id}
                  nom={item.nom}
                  prenom={item.prenom}
                  image={item.image}
                  voiture={item.voiture}
                ></CardsDrivers>
              );
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (getValue) {
      buildCards();
      setGetValue(false);
    }
  }, [body]);

  return (
    <>
      <h2 style={{margin:"25px 0"}}>Les bolides de l'extrême</h2>

      <div className="containerCards">
        {body}
        <br />
      </div>
      <h2 style={{margin:"25px 0"}}>Les pilotes de l'extrême</h2>

      <div className="containerCards">
        {body2}
        <br />
      </div>
    </>
  );
}

export default Home;
