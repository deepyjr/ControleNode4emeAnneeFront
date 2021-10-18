import React from "react";
import Cards from "../Components/Cards/Cards";
import "../App.css";
import axios from "axios";

function Home() {
  const [body, setBody] = React.useState();
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

  return <div className="containerCards">{body}</div>;
}

export default Home;
