import { Store, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer, { State } from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store: Store<State> = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
