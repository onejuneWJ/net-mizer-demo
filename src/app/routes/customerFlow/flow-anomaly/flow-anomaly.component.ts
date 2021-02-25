import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PageRequest} from "@entity/common/page";

@Component({
  selector: 'app-flow-anomaly',
  templateUrl: './flow-anomaly.component.html',
  styleUrls: ['./flow-anomaly.component.css']
})
export class FlowAnomalyComponent implements OnInit {

  listOfColumns = [
    {
      title: '序号',
      compare: null,
      priority: false
    },
    {
      title: '用户',
      compare: null,
      priority: false
    },
    {
      title: '月份',
      compare: null,
      priority: false
    },
    {
      title: '往期上下行流量(TB)',
      compare: null,
      priority: false
    },
    {
      title: '近期上下行流量(TB)',
      compare: null,
      priority: false
    },
    {
      title: '上下行流量差异值(TB)',
      compare: (a: any, b: any) => (a.recentUpDownFlow-a.beforeUpDownFlow) - (b.recentUpDownFlow-b.beforeUpDownFlow),
      priority: false,
      flag: true
    }
  ];

  searchForm: FormGroup;
  nzLoading = false;
  // pageRequest: PageRequest = new PageRequest(1, 10, null, null);
  total: number;

  dataList: any[] = [];
  tableDataList: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      before: [],
      recent: []
    });

    for (let i = 0; i < 50; i++) {
      this.tableDataList = [
        ...this.tableDataList,
        {
          user: '用户' + i,
          month: 2,
          beforeUpDownFlow: Math.random() * 20 ,
          recentUpDownFlow: Math.random() * 20 ,
          // upDownFlowDiff: 0,
        }
      ];
    }
    this.dataList = this.tableDataList;
    this.search();

  }


  search(){
    const recent = this.searchForm.getRawValue().recent;
    const before = recent - 1;
  }
}
