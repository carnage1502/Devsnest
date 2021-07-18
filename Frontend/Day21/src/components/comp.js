import { useState } from "react";

const RenderItem = ({ updateItem, removeItem, item, index }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="card w-45 p-2 my-2"
      style={{ width: "12 rem", backgroundColor: "lightgrey" }}
    >
      <div className="card-body">
        {isEditing ? (
          <input
            type="text"
            name="title"
            id="title"
            required
            value={item.title}
            onChange={(e) => updateItem(index, { title: e.target.value })}
          />
        ) : (
          <h5 className="card-title">{item.title}</h5>
        )}
        {isEditing ? (
          <input
            type="number"
            name="calorie"
            id="calorie"
            required
            value={item.calorie}
            onChange={(e) => updateItem(index, { calorie: e.target.value })}
            style={{ marginBottom: "20px" }}
          />
        ) : (
          <p className="card-text">
            {" "}
            You have consumed {item.calorie} calories
          </p>
        )}
        <div className="d-flex " style={{ justifyContent: "space-evenly" }}>
          <button className="btn btn-danger" onClick={() => removeItem(index)}>
            Delete
          </button>
          <button
            className="btn mx-3 btn-warning"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Done" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderItem;