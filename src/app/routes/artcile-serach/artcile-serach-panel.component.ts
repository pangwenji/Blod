import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artcile-serach-panel',
  templateUrl: './artcile-serach-panel.component.html',
  styles: [
  ]
})
export class ArtcileSerachPanelComponent implements OnInit {
  // [x: string]: String;
  serachResult: String
  constructor() { }

  ngOnInit(): void {
  }

}
