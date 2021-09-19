import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducers";
import { useState } from "react";
import { addNote, deleteNote } from "./actions";

const App = () => {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  return (
    <div className="App">
      <h2>Carnage Note Picker</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addNote(input));
          setInput("");
        }}
      >
        Add
      </button>
      <div className="notes">
        <ul>
          {notes.map((note: string, index: number) => (
            <li key={index}>
              {note}{" "}
              <button
                onClick={() => {
                  dispatch(deleteNote(index));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;