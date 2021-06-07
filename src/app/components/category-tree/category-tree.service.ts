import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ICategory} from '../../model/category.model';
import {CATEGORY_DATA_FROM_FILE} from '../../data/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryTreeService {
  treeData$ = new BehaviorSubject<ICategory[]>([]);

  constructor() {
  }

  setCategoryTree(inputData: ICategory[]) {
    this.treeData$.next(inputData);
  }
}
