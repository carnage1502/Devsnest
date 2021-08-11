const updatePlace = (place) => {
    return {
      type: "UPDATE_PLACE",
      payload: place,
    };
  };
  
  const updatePlaceData = (place) => {
    return (dispatch) => {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=e0c416034cbf48dc852153122210908&q=${place}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "UPDATE_PLACE_DATA",
            payload: data,
          });
        });
    };
  };
  
  export { updatePlace, updatePlaceData };