import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import session from './sessionReducer';
import modal from './modalReducer';
import fetching from './fetchProcessReducer';
import addArticle from './addArticleReducer';

/** persist configuration for sync with localStorage **/
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['modal']
};

const rootReducer = combineReducers({

  session,
  modal,
  fetching,
  addArticle

});

export default persistReducer(rootPersistConfig, rootReducer);
