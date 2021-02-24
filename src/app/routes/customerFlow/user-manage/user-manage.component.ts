import { Component, OnInit } from '@angular/core';
import {EChartsOption} from "echarts/types/dist/echarts";
import {format} from "date-fns";


@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  isVisible = false;
  expireTableLoading = false;
  expireDataList: any[] = [];
  bandwidthShortageTableLoading = false;
  bandwidthShortageDataList: any[] = [];
  bandwidthSituationTableLoading = false;
  bandwidthSituationDataList: any[] = [];
  bandwidthSituationOpt: EChartsOption = null;
  basisOpt: EChartsOption = null;


  tableDataList: any[] = [];
  bandwidthShortageTableDataList: any[] = [];
  bandwidthSituationTableDataList: any[] = [];

  checked = false;
  setOfCheckedId = new Set<number>();
  indeterminate = false;



  constructor() { }

  ngOnInit(): void {
    this.statisticsBandwidthOpt();
    this.statisticsBasisOpt();
    for (let i = 0; i < 20; i++) {
      this.tableDataList = [
        ...this.tableDataList,
        {
          user: '用户' + i,
          city: '成都',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          bandwidthUsage: 80 + Math.random() * 10,
          expireTime: '2021年3月5日'
        }
      ];
    }
    this.expireDataList = this.tableDataList;

    for (let i = 0; i < 20; i++) {
      this.bandwidthShortageTableDataList = [
        ...this.bandwidthShortageTableDataList,
        {
          id: i,
          user: '用户' + i,
          city: '成都',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          bandwidthUsage: 89 + Math.random() * 10,
        }
      ];
    }
    this.bandwidthShortageDataList = this.bandwidthShortageTableDataList;

    for (let i = 0; i < 20; i++) {
      this.bandwidthSituationTableDataList = [
        ...this.bandwidthSituationTableDataList,
        {
          user: '用户' + i,
          city: '成都',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          bandwidthPeak: 95 - i*0.1,
        }
      ];
    }
    this.bandwidthSituationDataList = this.bandwidthSituationTableDataList;
  }

  download(){}

  statisticsBandwidthOpt() {
    this.bandwidthSituationOpt = {
      title: {
        text: '1小时内带宽使用波动情况'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params["value"] + ' %';
        }
      },
      legend: {
        data: ['带宽利用率峰值']
      },
      xAxis: {
        type: 'category',
        data: ['12:00', '12:10', '12:20', '12:30', '12:40', '12:50']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '带宽利用率峰值',
        data: [96.5, 98.7, 92.3, 86.3, 96.3, 97.2, 98.1],
        type: 'line'
      }]
    };
  }

  statisticsBasisOpt() {
    this.basisOpt = {
      title: {
        text: '用户一个月内每周流量使用情况'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params["value"] + ' G';
        }
      },
      legend: {
        data: ['流量']
      },
      xAxis: {
        type: 'category',
        data: ['第一周', '第二周', '第三周', '第四周']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '流量',
        data: [101, 125, 129, 150],
        type: 'line'
      }]
    };

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.bandwidthShortageDataList.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.bandwidthShortageDataList.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
}
