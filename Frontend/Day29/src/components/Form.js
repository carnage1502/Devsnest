import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";

const Form = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            value={place}
            onChange={(e) => dispatch(updatePlace(e.target.value))}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(updatePlaceData(place));
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;