import axios from 'axios';
import {
  validateEmail,
  validatePassword,
  isPasswordsMatch,
} from '../validators/validators';

const BASE_URL = 'http://localhost:5000';

export const login = (loginObject) => {
  const loginData = {
    email: loginObject.email,
    password: loginObject.password,
    rememberMe: loginObject.rememberMe,
  };
  return axios
    .post(`${BASE_URL}/api/v1/auth/login-user`, loginData)
    .then((response) => {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('id', response.data.data.uniqueId);
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const createNewUser = (newUserObject) => {
  if (!validateEmail(newUserObject.email)) {
    return { error: true, msg: 'Email Invalid' };
  }
  if (!validatePassword(newUserObject.password)) {
    return { error: true, msg: 'Password Invalid' };
  }
  if (!isPasswordsMatch(newUserObject.password, newUserObject.password2)) {
    return { error: true, msg: `Passwords don't match` };
  }
  const newAccountData = {
    firstName: newUserObject.name,
    email: newUserObject.email,
    password: newUserObject.password,
    password2: newUserObject.password2,
    acceptedTerms: newUserObject.acceptedTerms,
  };
  return axios
    .post(`${BASE_URL}/api/v1/auth/create-new-user`, newAccountData)
    .then((response) => {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('id', response.data.data.uniqueId);
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const logout = () => {
  localStorage.clear();
};

export const fetchUserInfo = async () => {
  const userAuth = await checkUserLoggedIn();
  if (!userAuth) {
    return false;
  } else {
    const uniqueId = localStorage.getItem('id');
    return axios
      .get(`${BASE_URL}/api/v1/user/fetch-user-info/${uniqueId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((error) => {
        return error.response;
      });
  }
};

export const checkUserLoggedIn = async () => {
  let tokenExists = localStorage.getItem('token');
  let tokenValid = await checkTokenValid(tokenExists);
  if (!tokenExists) {
    return false;
  } else if (!tokenValid) {
    return false;
  } else {
    return true;
  }
};

export const checkTokenValid = (token) => {
  return axios
    .get(`${BASE_URL}/api/v1/auth/check-token-valid-external/${token}`)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export const addStamp = (data) => {
  return axios
    .post(
      `${BASE_URL}/api/v1/stamps/add-stamp/${data.uniqueId}/${data.customerId}/${data.stampsToAdd}/${data.token}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
};
