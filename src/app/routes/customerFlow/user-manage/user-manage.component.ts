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
  isVisibleMarket = false
  isVisibleRemarks = false;
  expireTableLoading = false;
  expireDataList: any[] = [];
  bandwidthShortageTableLoading = false;
  bandwidthShortageDataList: any[] = [];
  bandwidthSituationTableLoading = false;
  bandwidthSituationDataList: any[] = [];
  bandwidthSituationOpt: EChartsOption = null;
  basisOpt: EChartsOption = null;
  inputValue?: string;


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
          city: '洛江区',
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
          city: '泉港区',
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
          city: '石狮市',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          bandwidthPeak: 95 - i*0.1,
        }
      ];
    }
    this.bandwidthSituationDataList = this.bandwidthSituationTableDataList;
  }


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
      toolbox: {
        feature: {
          saveAsImage: {}
        }
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
          text: '带宽不足依据'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['使用带宽', '标准带宽']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '使用带宽',
            type: 'line',
            data: [86, 90, 92, 91, 95, 93, 96]
          },
          {
            name: '标准带宽',
            type: 'line',
            data: [100, 100, 100, 100, 100, 100, 100]
          },
        ]
      };

  }

  remarks(){
    this.isVisibleRemarks = true;
  }


  handleRemarksOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleRemarks = false;
  }

  handleRemarksCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleRemarks = false;
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

  showMarketModal(): void {
    this.isVisibleMarket = true;
  }

  handleMarketOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleMarket = false;
  }

  handleMarketCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleMarket = false;
  }
}
