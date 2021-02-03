export function addAdminStatus(token) {
  window.localStorage.setItem('admin', token);
  return true;
}

export function addId(id) {
  window.localStorage.setItem('id', id);
  return true;
}

export function getAdminStatus() {
  return window.localStorage.getItem('admin') || null;
}

export function getUserId() {
  return window.localStorage.getItem('id') || null;
}

export function clearStorage() {
  window.localStorage.removeItem('admin');
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('token');
  return true;
}
