/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { put ,call} from 'redux-saga/effects';
import ForgetPassword from 'services/forgetPassword'
import * as loginActions from 'store/actions/loginActions';

// Our worker Saga that logins the user
export default function* forgetPassword(action) {
  yield put(loginActions.enableLoader());

  //how to call api
  const response = yield call(ForgetPassword, {
    email:action.params
  });
  //mock response

  
    yield put(loginActions.IForgotPasswordResponse(response));
    yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  
}


