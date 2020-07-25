import { Component, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';
const SECOND = 1000;
const MINUTE = 1000 * 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styles: [
  ]
})
export class LinechartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.changeData()
  }
  getCurrentTime() {
    let date = new Date()
    return date.getTime()
  }
  changeData(): void {
    const data = [
      { date: this.getCurrentTime(), pv: 17, time: 12351000 },
      { date: this.getCurrentTime(), pv: 10, time: 18000 },
      { date: 1489766400000, pv: 3, time: 0 },
      { date: 1489852800000, pv: 3, time: 0 },
      { date: 1489939200000, pv: 18, time: 21157000 },
      { date: 1490025600000, pv: 32, time: 3543000 },
      { date: 1490112000000, pv: 25, time: 10000 },
      { date: 1490198400000, pv: 23, time: 24000 },
      { date: this.getCurrentTime(), pv: 7, time: 0 },
    ];


    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      date: {
        alias: '日期',
        type: 'time',
      },
      pv: {
        alias: '进入次数',
        min: 0,
        sync: true, // 将 pv 字段数值同 time 字段数值进行同步
        nice: true,
      },
      time: {
        alias: '平均时长',
        formatter: (value) => {
          return this.humanizeDuration(value, 0);
        },
        sync: true,  // 将 pv 字段数值同 time 字段数值进行同步
        nice: true,
      },
      count: {
        alias: '次数',
      },
    });

    chart.axis('time', {
      grid: null,
      title: {},
    });
    chart.axis('pv', {
      title: {},
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart
      .line()
      .position('date*pv')
      .color('#4FAAEB');
    chart
      .line()
      .position('date*time')
      .color('#9AD681')
      .shape('dash');
    chart.render();
  }


  toInteger(number, fix = 1) {
    if (Math.round(number) === number) {
      return number;
    }
    return Number(number).toFixed(fix);
  }

  humanizeDuration(duration, fix = 1) {
    if (duration === 0) {
      return '0';
    }
    if (duration < MINUTE) {
      return this.toInteger(duration / SECOND, fix) + ' 秒';
    }
    if (duration < HOUR) {
      return this.toInteger(duration / MINUTE, fix) + ' 分';
    }
    if (duration < DAY) {
      return this.toInteger(duration / HOUR, fix) + '小时';
    }
    return this.toInteger(duration / HOUR / 24, fix) + ' 天';
  }



}
