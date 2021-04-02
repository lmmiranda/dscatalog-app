import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    path: string;
    data?: object;
    params?: object;
}

const BASE_URL = "http://localhost:3000";

export const doRequest = ({ method = 'GET', path, data, params }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${path}`,
        data,
        params,
    });
}
