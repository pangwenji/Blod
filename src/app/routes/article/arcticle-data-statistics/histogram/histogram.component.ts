import { Component, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styles: [
  ]
})
export class HistogramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeData()
  }
  changeData(): void {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    // Step 1: 创建 Chart 对象
    const chart = new Chart({
      container: 'container', // 指定图表容器 ID
      width: 1200, // 指定图表宽度
      height: 600, // 指定图表高度
    });

    // Step 2: 载入数据源
    chart.data(data);

    // Step 3: 创建图形语法，绘制柱状图
    chart.interval().position('genre*sold');

    // Step 4: 渲染图表
    chart.render();


  }

}
