import type {AxiosInstance} from 'axios';
import type {Product, ProductDetails} from './dto';
import {Domen} from '../enums';

export const getProducts = async (api: AxiosInstance) => api.get<Product[]>(Domen.Cameras).then(({data}) => data);

export const getProductById = async (api: AxiosInstance, productId: number) => {
  const entityId = productId.toString();
  return api.get<ProductDetails>(`DOMEN_ENDPOINT/${entityId}`).then(({data}) => data);
};

export const getSimilarProducts = async (api: AxiosInstance, productId: number) => {
  const entityId = productId.toString();
  return api.get<Product[]>(`${Domen.Cameras}/${entityId}${Domen.Similar}`);
};
