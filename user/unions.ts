import * as R from 'ramda';
import { User } from './user';

const updateBillingZipCode: ActionCreator = (zipCode: ZipCode): UserAction => ({
  type: 'UPDATE_USER_BILLING_ZIP_CODE', zipCode
})

const userReducer = (state = null, action: UserAction): null | User => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user;
    case 'LOGOUT_USER':
      return null;
    case 'UPDATE_USER_BILLING_ZIP_CODE':
      return R.assocPath(['address', 'zipCode'], action.zipCode, state);
    default:
      return state;
  }
}

type UserAction =
{ type: 'CREATE_USER', user: User } |
{ type: 'LOGIN_USER', user: User } |
{ type: 'LOGOUT_USER', user: User } |
{ type: 'UPDATE_USER_BILLING_ZIP_CODE', zipCode: ZipCode};

