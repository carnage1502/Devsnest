import { useHistory } from "react-router-dom";

const Card = ({ item }) => {
  const history = useHistory();
  const openCard = () => {
    console.log("Clicked");
    history.push(`/${item.id}`);
  };

  return (
    <div className="cardBox" onClick={openCard}>
      <div className="mainCard">
        <div className="imgBox">
          <i className="fas fa-heart fa-2x cardHeart"></i>
          <img src={item.image} alt="items pics" height="230px" width="230px" />
        </div>
        <div className="cardContent">
          <p className="cardTitle">{item.title}</p>
          <p className="cardDesc">{item.description}</p>
          <h5>
            Price: <b> ₹ {item.price}</b>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;