import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import about from './aboutReducer';
import session from './sessionReducer';
import profile from './profileReducer';
import invoices from './invoicesReducer';
import wishList from './wishListReducer';
import modal from './modalReducer';
import cart from './cartReducer';
import checkout from './checkoutReducer';
import searchProducts from './searchReducer';
import products from './productsReducer';
import categories from './categoriesReducer';
import buildingObjects from './buildingReducer';
import fetching from './fetchProcessReducer';
import mainImages from './mainImagesReducer';
import articles from './blogReducer';
import currency from './currencyReducer';

/** persist configuration for sync with localStorage **/
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['searchProducts', 'modal', 'getProducts']
};

const rootReducer = combineReducers({
  about,
  session,
  profile,
  invoices,
  wishList,
  modal,
  cart,
  checkout,
  searchProducts,
  products,
  categories,
  buildingObjects,
  fetching,
  mainImages,
  articles,
  currency
});

export default persistReducer(rootPersistConfig, rootReducer);