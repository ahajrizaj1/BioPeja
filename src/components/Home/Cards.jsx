import Aos from "aos";
import { cards } from "../../Data";
import "./style/cards.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cards = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="cards">
      <h2 className="cards__title">We Offer These Products</h2>
      <div className="cards__container">
        {cards.map((card) => (
          <div className="card" data-aos="fade-up" data-aos-duration='1500' key={card.id}>
            <img
              src={card.image}
              style={{ width: "100%", height: "50%" }}
              alt=""
            />
            <p className="cards__type">{card.type}</p>
            <p className="cards__price">{card.price}</p>
            <p className="cards__description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
