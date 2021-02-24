import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-zero-flow-analysis',
  templateUrl: './zero-flow-analysis.component.html',
  styleUrls: ['./zero-flow-analysis.component.css']
})
export class ZeroFlowAnalysisComponent implements OnInit {

  searchForm: FormGroup;
  nzLoading = false;

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
          city: '成都',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          group: '集团'+ i,
          userExpireMessage: '2021年3月5日到期'
        }
      ];
    }
    this.dataList = this.tableDataList;

    this.search();
  }
 search(){
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
}
