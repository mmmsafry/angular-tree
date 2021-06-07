import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox-tree-facet',
  templateUrl: './checkbox-tree-facet.component.html',
  styleUrls: ['./checkbox-tree-facet.component.scss']
})
export class CheckboxTreeFacetComponent implements OnInit {
  @Input() treeData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
