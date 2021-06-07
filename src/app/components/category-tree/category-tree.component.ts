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
  categories: ICategory[] = [];
  selectedCategories: any[];

  constructor(private categoryApiService: CategoryApiService, private categoryTree: CategoryTreeService) {
  }

  ngOnInit(): void {
    this.getCategory();
    /** Setting up selectedValue  */
    this.sub = this.categoryTree.treeData$.subscribe(res => {
      const apiResponse = res.map(obj => {
        /** Default all categories are hidden */
        obj.selected = false;
        return obj;
      });
      this.categories = this.generateTree(apiResponse);
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


  generateTree(inputTreeRawData) {
    const indexed = inputTreeRawData.reduce((res, item) => {
      res[item.id] = item;
      return res;
    }, {});

    const result = inputTreeRawData.filter((item) => {
      const parent = indexed[item.parent];
      if (parent) {
        parent.collapsed = true;
        parent.children = (parent.children || []).concat(item);
      }
      return !parent;
    });
    return (result);
  }

  toggleSelect() {
    this.selectedCategories = [];
    this.updateSelectedCategories(this.categories);
  }

  updateSelectedCategories(categories) {
    categories.forEach(obj => {
      if (obj.isSelected) {
        this.selectedCategories.push({id: obj.id, name: obj.name});
      }

      if (obj.children && obj.children.length > 0) {
        this.updateSelectedCategories(obj.children);
      }
    });
  }

  removeAllSelected(categories) {
    categories.forEach(obj => {
      obj.isSelected = false;
      obj.selectAll = false;
      if (obj.children && obj.children.length > 0) {
        this.removeAllSelected(obj.children);
      }
    });
    this.selectedCategories = [];
  }
}
