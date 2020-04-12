export function addToken(token) {
  window.localStorage.setItem('token', token);
  return true;
}

export function addId(id) {
  window.localStorage.setItem('id', id);
  return true;
}

export function getToken() {
  return window.localStorage.getItem('token') || null;
}

export function getUserId() {
  return window.localStorage.getItem('id') || null;
}

export function clearStorage() {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('id');
  return true;
}
