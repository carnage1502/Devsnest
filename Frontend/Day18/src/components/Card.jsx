import Black from "./Black";
import White from "./White";

const Card = () => {
  const getCard = () => {
    let arr = [];
    for (let i = 0; i < 72; i++) {
      if (i % 2 === 0) {
        arr.push(<Black key={i} />);
      } else {
        arr.push(<White key={i} />);
      }
    }
    return arr;
  };
  return (
    <>
      <div className="container">
        <div className="card">{getCard()}</div>
      </div>
    </>
  );
};

export default Card;