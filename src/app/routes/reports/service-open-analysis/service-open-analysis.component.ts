import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-service-open-analysis',
  templateUrl: './service-open-analysis.component.html',
  styleUrls: ['./service-open-analysis.component.css']
})
export class ServiceOpenAnalysisComponent implements OnInit {
  searchForm: FormGroup;
  dataList: any[] = [];
  dataSource: any[] = [];
  chartsOption: any;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      serviceName: []
    });
    for (let i = 0; i < 20; i++) {
      this.dataSource = [
        ...this.dataSource,
        {
          serviceName: '业务' + i,
          total: 12350,
          durationAvg: '10分钟',
          timelyRate: '98%'
        }
      ];
    }
    this.dataList = this.dataSource;
    this.initChartsOption();
  }

  search(): void {

  }

  initChartsOption(): void {
    this.chartsOption = {
      title: {
        text: '业务开通分析',
      },
      legend: {
        data: ['开通总量', '开通历时']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'item'
      },
      yAxis: {
        type: 'value',
      },
      xAxis: {
        type: 'category',
        data: ['上月', '本月']
      },
      series: [
        {
          name: '开通总量',
          type: 'bar',
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            }
          },
          data: [182, 234]
        },
        {
          name: '开通历时',
          type: 'bar',
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            },
          },
          data: [103, 289]
        }
      ]
    };
  }
}
