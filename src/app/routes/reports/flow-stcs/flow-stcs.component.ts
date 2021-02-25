import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {add} from 'date-fns';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-flow-stcs',
  templateUrl: './flow-stcs.component.html',
  styleUrls: ['./flow-stcs.component.css']
})
export class FlowStcsComponent implements OnInit {
  dataSource: any[] = [];
  dataList: any[];
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      statisticalDimension: [0],
      timeInterval: [0]
    });


    const now = new Date();
    for (let i = 0; i < 50; i++) {
      const randomNum = Math.random() * 100;
      this.dataSource = [
        ...this.dataSource,
        {
          timeStart: add(now, {hours: i}),
          timeEnd: add(now, {hours: i}),
          upFlow: formatNumber(randomNum, 'zh_CN', '1.0-2') + ' GB',
          downFlow: formatNumber(randomNum, 'zh_CN', '1.0-2') + ' GB',
        }
      ];
    }
    this.dataList = this.dataSource;
  }

  search(): void {
    this.dataList = this.dataList.map(value => {
      const randomNum = Math.random() * 1000;
      return {
        timeStart: value.timeStart,
        timeEnd: value.timeEnd,
        upFlow: formatNumber(randomNum, 'zh_CN', '1.0-2') + ' GB',
        downFlow: formatNumber(randomNum, 'zh_CN', '1.0-2') + ' GB',
      };
    });
  }
}
