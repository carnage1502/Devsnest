const placeReducer = (state = "", actions) => {
    switch (actions.type) {
      case "UPDATE_PLACE": {
        return actions.payload;
      }
  
      default:
        return state;
    }
  };
  
  export default placeReducer;