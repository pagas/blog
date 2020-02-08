import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../commands/skypey-data-generator";

const store = createStore(reducer, contacts);

export default store;