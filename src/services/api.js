import axios from 'axios';
axios.defaults.baseURL = 'https://63fdd5f419f41bb9f6549e09.mockapi.io';

export const fetchContact = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

const publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export async function register(credential) {
  const data = await publicHost.post('​/users​/signup', credential);
  return data;
}
export async function login(credential) {
  const data = await publicHost.post('​/users​//login', credential);
  return data;
}
export const token = {
  set: (token, token_type) => {
    privateHost.defaults.headers.common.Authorization = `${token_type} ${token}`;
  },
  unset: () => {
    privateHost.defaults.headers.common.Authorization = '';
  },
};
