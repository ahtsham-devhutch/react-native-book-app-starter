/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';
import signupUser from 'services/signupUser';
import * as loginActions from 'store/actions/loginActions';
// Our worker Saga that logins the user
export default function* signUpsync(action:any) {
  yield put(loginActions.enableLoader());
console.log('actiono',action.params)
const response = yield call(signupUser, action.params)
console.log('responsu', response)
  if (response && response.status == "success") {
    yield put(loginActions.ISignupResponse(response));
    yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.disableLoader());
   
  }
}

