import Food from "./food";

const Card = () => {
  return (
      <div className="container">
        <div className="card">
          <Food name="Pizza" cal="56" />
          <Food name="Burger" cal="69" />
          <Food name="Dew" cal="500" />
          <Food name="Momos" cal="180" />
          <Food name="Fried Rice" cal="90" />
          <Food name="Pani-Puri" cal="10" />
        </div>
      </div>
  );
};

export default Card;