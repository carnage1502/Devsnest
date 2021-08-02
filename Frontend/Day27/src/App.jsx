import './style.css';
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AddTodo/>
                <List/>
            </div>
        </Provider>
    );
}

export default App;