import RowB from "./RowB";
import RowW from "./RowW";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <RowB />
          <RowW />
          <RowB />
          <RowW />
          <RowB />
          <RowW />
          <RowB />
          <RowW />
        </div>
      </div>
    </>
  );
};

export default Card;