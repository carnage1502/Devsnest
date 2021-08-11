const placeDataReducer = (state = {}, actions) => {
    switch (actions.type) {
      case "UPDATE_PLACE_DATA": {
        return actions.payload;
      }
  
      default:
        return state;
    }
  };
  
  export default placeDataReducer;