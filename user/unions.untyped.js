import R from 'ramda';

const updateUserZipCode = (zipCode) => ({
  type: 'UPDATE_ZIP_CODE', zipCode
})

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user;
    case 'LOGOUT_USER':
      return null;
    case 'UPDATE_USER_ZIP_CODE':
      return R.assocPath(['address', 'zipCode'], action.zipCode, state);
    default:
      return state;
  }
}
