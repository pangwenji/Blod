import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HomeService } from './articlesService'
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styles: []
})
export class ArticlesListComponent implements OnInit {
  constructor(private homeSer: HomeService) {
    this.homeSer.getBanners().subscribe(item => {
      console.log(item)
    })
  }

  temArry = []
  checked = false
  checked1 = false;
  serachResult: any
  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.temArry.push({
        "title": "窗前明月光，疑是地上商",
        "value2": `${new Date()}`,
        "value3": "深空探索",
        "value4": "人生感悟",
        "value5": "操作"
      })
      this.changeData()
    }

  }
  onSerach(keyword: String) {
    this.changeData()
      .subscribe(value => {
        console.log("keyword", keyword)
        this.serachResult = keyword
      })
  }
  changeData() {
    return from(['we', 'hr', 'er'])
  }
}  
