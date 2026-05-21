import type {AxiosInstance, AxiosResponse} from 'axios';
import axios, {AxiosError} from 'axios';
import {toast} from 'react-toastify';
import type {DetailedMessage} from './types/detailed-message';
import {StatusCodeMapping} from './enums';

const {VITE_API_URL} = import.meta.env;
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: VITE_API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailedMessage>) => {
      if (error.code === AxiosError.ECONNABORTED) {
        throw error;
      }

      if (!error.response) {
        throw error;
      }

      if (shouldDisplayError(error.response)) {
        const detailedMessages = error.response.data.details?.flatMap(({messages}) => messages);
        detailedMessages?.forEach((message) => toast.error(message));
      }

      throw error;
    },
  );

  return api;
};

export const httpApi = createApi();
