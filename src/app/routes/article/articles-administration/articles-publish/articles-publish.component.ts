import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-articles-publish',
  templateUrl: './articles-publish.component.html',
  styles: [
    `nz-select{
      width:200px;
        }`
  ]
})
export class ArticlesPublishComponent implements OnInit {

  selectValue: String = null;
  mycontent: String = null;
  inputValue?: String
  constructor() { }

  ngOnInit(): void {
  }
  onChange(e) {

  }
}
