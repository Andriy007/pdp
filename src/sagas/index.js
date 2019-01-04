import { all, call } from 'redux-saga/effects';
import registerSaga from "./registrationSaga"


function* mySaga() {
  yield all([
    call(registerSaga)
  ])
}

export default mySaga;
