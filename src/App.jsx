import React from "react";
import { useState, useEffect } from "react";
import Scoreboard from "./Components/Scoreboard.jsx";
import Card from "./Components/Card.jsx";
import MyModal from "./Components/Modal.jsx";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=21";

  useEffect(() => {
    //Fetch data from API
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const cardData = data.results.map((item, index) => ({
          id: index,
          name: item.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));

        setCards(shuffleArray(cardData));
      })
      .catch((err) => console.log(`Error fetching data: ${err}`));
  }, []);

  //Shuffling the Card Array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  //Handling Card Clicks
  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      //Reset if the same card is clicked again
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }

    //Shuffle cards
    setCards(shuffleArray(cards));
  };
  return (
    <>
      <div className="app">
        <MyModal />
        <Scoreboard score={score} bestScore={bestScore} />
        <div className="card-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
