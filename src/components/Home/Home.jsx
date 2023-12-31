import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
          ))}
      </div>
    </>
  );
};

export default Home
