import {Component, OnInit} from '@angular/core';
import {CategoryApiService} from '../../service/category-api.service';
import {CategoryTreeService} from './category-tree.service';
import {Subscription} from 'rxjs';
import {ICategory} from '../../model/category.model';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {

  loading = false;
  error = false;
  sub: Subscription;
  treeData: ICategory[] = [];

  constructor(private categoryApiService: CategoryApiService, private categoryTree: CategoryTreeService) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.sub = this.categoryTree.treeData$.subscribe(res => {
      this.treeData = res;
    });
  }

  getCategory() {
    this.loading = true;
    this.categoryApiService.getCategory().subscribe(resp => {
      console.log('r', resp);
      this.loading = false;
    }, error => {
      this.error = false;
      console.log(error);
    });
  }


}
