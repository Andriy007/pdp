import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import fetching from './fetchProcessReducer';
import registration from "./registration.reducer"
import authentication from "./authentication.reducer"
import group from "./addGroupe.reducer";

/** persist configuration for sync with localStorage **/
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['modal', "registration"]
};

const rootReducer = combineReducers({

  fetching,
  authentication,
  registration,
  group,

});

export default persistReducer(rootPersistConfig, rootReducer);
