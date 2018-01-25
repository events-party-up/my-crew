import { createStore, combineReducers } from 'redux'
import mainReducer from '../redux/mainReducer'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      main: mainReducer
    }),
  );

  return store
};

export default configureStore