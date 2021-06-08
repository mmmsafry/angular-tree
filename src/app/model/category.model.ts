import {ApiResponse} from './api.response.model';

export type ICategoryAPI = ApiResponse<ICategory[]>;

export interface ICategory {
  id: number;
  count: number;
  parent: number;
  name: string;
  selected?: boolean;
  children?: ICategory[];
}

