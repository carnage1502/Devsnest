import Card from "./components/Card";
import './style.css';
  
  function App() {
    return(
      <div className="App">
        <h className="head"><tab>Instructions</tab><li style={{fontSize: 20,padding: 5}}>pass value and setter of the state to the component as props.</li></h>
        <h className="heading">Calorie Reader</h>
          <Card /> </div>
    );  
  }

  export default App;