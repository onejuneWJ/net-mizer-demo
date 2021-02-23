import {Component, OnInit} from '@angular/core';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  beaconOption: any;
  transducerOption: any;
  antennaOption: any;

  constructor() {
  }

  ngOnInit(): void {
    this.beaconOption = {
      title: {
        text: '信标信息',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['正常', '预警', '异常']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          label: {position: 'inside'},
          data: [
            {
              value: 335,
              name: '正常',
              itemStyle: {
                color: 'rgb(115,179,4)'
              }
            },
            {
              value: 50,
              name: '预警',
              itemStyle: {
                color: 'rgb(253,160,5)'
              }
            },
            {
              value: 40,
              name: '异常',
              itemStyle: {
                color: 'rgb(250,7,7)'
              }
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.transducerOption = {
      title: {
        text: '传感器信息',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['正常', '预警', '异常']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          label: {position: 'inside'},
          data: [
            {
              value: 135,
              name: '正常',
              itemStyle: {
                color: 'rgb(115,179,4)'
              }
            },
            {
              value: 30,
              name: '预警',
              itemStyle: {
                color: 'rgb(253,160,5)'
              }
            },
            {
              value: 20,
              name: '异常',
              itemStyle: {
                color: 'rgb(250,7,7)'
              }
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.antennaOption = {
      title: {
        text: '天线信息',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['正常', '预警', '异常']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          label: {position: 'inside'},
          data: [
            {
              value: 235,
              name: '正常',
              itemStyle: {
                color: 'rgb(115,179,4)'
              }
            },
            {
              value: 30,
              name: '预警',
              itemStyle: {
                color: 'rgb(253,160,5)'
              }
            },
            {
              value: 20,
              name: '异常',
              itemStyle: {
                color: 'rgb(250,7,7)'
              }
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };


  }

  click($event: unknown): void {
    console.log($event);
  }
}
