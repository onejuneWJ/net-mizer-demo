import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EChartsOption} from "echarts/types/dist/echarts";

@Component({
  selector: 'app-zero-flow-analysis',
  templateUrl: './zero-flow-analysis.component.html',
  styleUrls: ['./zero-flow-analysis.component.css']
})
export class ZeroFlowAnalysisComponent implements OnInit {

  searchForm: FormGroup;
  nzLoading = false;
  isVisible = false;


  cityOpt: EChartsOption = null;
  equipOpt: EChartsOption = null;
  ipOpt: EChartsOption = null;


  dataList: any[] = [];
  tableDataList: any[] = [];

  checked = false;
  setOfCheckedId = new Set<number>();
  indeterminate = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      city: [],
      equip: [],
      ip: [],
    });

    for (let i = 0; i < 30; i++) {
      this.tableDataList = [
        ...this.tableDataList,
        {
          id: i,
          user: '用户' + i,
          city: '晋江市',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          group: '集团'+ i,
          userExpireMessage: '2021年3月5日到期'
        }
      ];
    }
    this.dataList = this.tableDataList;

    this.search();
    this.statisticsZeroOpt();
  }
 search(){
  }

  statisticsZeroOpt(){
    this.cityOpt = {
      title: {
        text: '零流量用户各县市占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '县市',
          type: 'pie',
          radius: '50%',
          center: ['50%', '60%'],
          data: [
            {value: 735, name: '丰泽区'},
            {value: 580, name: '鲤城区'},
            {value: 484, name: '泉港区'},
            {value: 300, name: '石狮市'},
            {value: 1048, name: '晋江市'},
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
    this.equipOpt = {
      title: {
        text: '零流量用户各设备占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '设备',
          type: 'pie',
          radius: '50%',
          center: ['50%', '60%'],
          data: [
            {value: 666, name: '设备1'},
            {value: 888, name: '设备2'},
            {value: 799, name: '设备3'},
            {value: 1200, name: '设备4'},
            {value: 678, name: '设备5'}
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
    this.ipOpt = {
      title: {
        text: '零流量用户各ip占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'ip',
          type: 'pie',
          radius: '50%',
          center: ['50%', '60%'],
          data: [
            {value: 567, name: '111.111.12.1'},
            {value: 987, name: '111.111.12.2'},
            {value: 569, name: '111.111.12.3'},
            {value: 246, name: '111.111.12.4'},
            {value: 789, name: '111.111.12.5'}
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


  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.dataList.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.dataList.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
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
}
