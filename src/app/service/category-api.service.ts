import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {ICategoryAPI} from '../model/category.model';
import {CategoryTreeService} from '../components/category-tree/category-tree.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private categoryTree: CategoryTreeService) {
  }

  getCategory() {
    return this.http.get<ICategoryAPI>(`${this.baseUrl}/categories`).pipe(tap(resp => {
      this.categoryTree.setCategoryTree(resp.data);
    }));
  }
}
