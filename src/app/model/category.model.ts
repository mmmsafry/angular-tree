import {ApiResponse} from './api.response.model';

export type ICategoryAPI = ApiResponse<ICategory[]>;

export interface ICategory {
  id: number;
  count: number;
  parent: string;
  name: string;
  selected: boolean;
  child?: ICategory[];
}

