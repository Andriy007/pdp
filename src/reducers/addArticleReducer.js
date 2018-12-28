import { ADD_ARTICLE } from "../actions/actionTypes";

const initialState  = {
  articles: []
};

export default function addArticleReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
