import axios from 'axios';
// axios.defaults.baseURL = 'https://63fdd5f419f41bb9f6549e09.mockapi.io';

const publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export async function register(credential) {
  const data = await publicHost.post('/users/signup', credential);
  return data;
}
export async function login(credential) {
  const data = await publicHost.post('/users/login', credential);
  return data;
}
export async function getUserData() {
  const data = await privateHost.get('/users/current');
  return data;
}
export async function logout() {
  const { data } = await privateHost.post('/users/logout');
  return data;
}

export const fetchContact = async () => {
  const { data } = await privateHost.get(`/contacts`);
  return data;
};

export const addContact = async contact => {
  const { data } = await privateHost.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await privateHost.delete(`/contacts/${id}`);
  return data;
};

export const token = {
  set: token => {
    privateHost.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    privateHost.defaults.headers.common.Authorization = '';
  },
};

// export const fetchContact = async () => {
//   const { data } = await axios.get('contacts');
//   return data;
// };

// export const addContact = async contact => {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// };

// export const deleteContact = async id => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// };
