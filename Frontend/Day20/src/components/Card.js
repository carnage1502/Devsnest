import { useEffect, useState } from "react";

const Card = () => {
  const [items, setItems] = useState([
    {
      name: "Pizza",
      cal: 56,
    },
    {
      name: "Burger",
      cal: 100,
    },
    {
      name: "Coke",
      cal: 500,
    },
    {
      name: "Brownie",
      cal: 180,
    },
    {
      name: "Lassania",
      cal: 200,
    },
    {
      name: "Pani Puri",
      cal: 0,
    },
  ]);

  const del = (i) => {
    const newItems = items.filter((e, index) => index !== i);
    setItems(newItems);
  };

  useEffect(() => {
    if (items.length === 0) {
      alert("Its empty");
    }
  }, [items]);

  return (
    <>
      <div className="container">
        <div className="card">
          {items.map((ele, index) => {
            return (
              <div key={index} className="info">
                <div className="names">
                  <h1>{ele.name}</h1>
                  <button className="btn" onClick={() => del(index)}>Delete</button>
                </div>
                <h2 className="att">you have consumed {ele.cal} cals today</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;