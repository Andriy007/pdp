import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import registration from "./registration.reducer"
import authentication from "./authentication.reducer"
import group from "./addGroupe.reducer";
import errors from "./errors.reducer"

/** persist configuration for sync with localStorage **/
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ["registration", "errors"]
};

const rootReducer = combineReducers({

  authentication,
  registration,
  group,
  errors

});

export default persistReducer(rootPersistConfig, rootReducer);
