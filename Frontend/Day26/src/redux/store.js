import { createStore } from 'redux'
import { Reducer } from "./Form/Reducer";

const store = createStore(Reducer)

export default store;