/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';
// import loginUser from 'services/loginUser';
import * as loginActions from 'store/actions/loginActions';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  //how to call api
  const response = yield call(loginUser, action.username, action.password);
  //mock response

  
    yield put(loginActions.onLoginResponse(response.data));
    console.log('login response',response.data)
    yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  
}


