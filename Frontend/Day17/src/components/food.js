const food = (props) => {
    return (
        <div className="info">
          <h1>{props.name}</h1>
          <h2>Calories consumed {props.cal}</h2>
        </div>
    );
  };
  
  export default food;