import { api } from './api';

// methode get
export const getData = async (path) => {
    const response = await api.get(path);

    return response.data;
};

// methode post
export const postData = async (path, data) => {
    const response = await api.post(path, data);

    return response.data;
}



