import axios from "axios";
import i18n from '../locale/i18';
import storage from "../storage/storage";

//Runs heads on every request
axios.interceptors.request.use((request) => {
    request.headers['Accept-Language'] = i18n.language;
    const user = storage.getItem('user');
    const auth  = user.token ? `Bearer ${user.token}` : '';
    request.headers['Authorization'] = auth; 
    return request;
},
 (error) => {
    Promise.reject(error);
  });




export const signUp = (body) => { 
    return axios.post('/api/users', body);
};

export const activate = (token) => {
    return axios.post('/api/users/token', + token);
};

export const loadUsers = (page) => {
    return axios.get('/api/users', {params : { page , size: 3 } });
};

export const getUserById = (id) => {
    return axios.get(`/api/users/${id}`);
};

export const login = (body) => {
    return axios.post(`/api/auth`, body);
};

export const logout = (body) => {
    return axios.post(`/api/auth`, body);
};

export const updateUser = (id, body) => {
    return axios.put(`/api/users/${id}`, body);
};

export const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
};