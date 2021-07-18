import { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title, calorie });
    setTitle("");
    setCalorie("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center my-3 mx-auto"
    >
      <div className="d-flex align-items-center mb-2">
        <div className="me-3">
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Item Name"
          />
        </div>
        <div>
          <input
            type="number"
            name="number"
            id="number"
            required
            value={calorie}
            onChange={(e) => setCalorie(e.target.value)}
            placeholder="Calorie AMT"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;