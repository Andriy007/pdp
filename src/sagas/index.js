import { all, call } from 'redux-saga/effects';

import registerSaga from "./registrationSaga";
import loginSaga from "./loginSaga";


function* mySaga() {
  yield all([
    call(registerSaga),
    call(loginSaga)
  ])
}

export default mySaga;
