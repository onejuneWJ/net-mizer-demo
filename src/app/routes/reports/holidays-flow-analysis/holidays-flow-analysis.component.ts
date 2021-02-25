import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {add} from 'date-fns';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-holidays-flow-analysis',
  templateUrl: './holidays-flow-analysis.component.html',
  styleUrls: ['./holidays-flow-analysis.component.css']
})
export class HolidaysFlowAnalysisComponent implements OnInit {
  searchForm: FormGroup;
  dataSource: any[] = [];
  dataList: any[] = [];

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      time: []
    });

    const now = new Date();
    for (let i = 0; i < 50; i++) {
      this.dataSource = [
        ...this.dataSource,
        // 集团、BRAS、县市、OLT、交换机
        {
          dimension: '集团',
          time: add(now, {hours: i}),
          upFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
          downFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
        },
        {
          dimension: 'BRAS',
          time: add(now, {hours: i}),
          upFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
          downFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
        },
        {
          dimension: '县市',
          time: add(now, {hours: i}),
          upFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
          downFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
        },
        {
          dimension: 'OLT',
          time: add(now, {hours: i}),
          upFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
          downFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
        },
        {
          dimension: '交换机',
          time: add(now, {hours: i}),
          upFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
          downFlow: formatNumber(Math.random() * 100, 'zh_CN', '1.0-2') + ' GB',
        }
      ];
    }
    this.dataList = this.dataSource;
  }

  search(): void {

  }
}
