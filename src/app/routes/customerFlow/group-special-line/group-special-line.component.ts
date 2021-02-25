import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-group-special-line',
  templateUrl: './group-special-line.component.html',
  styleUrls: ['./group-special-line.component.css']
})
export class GroupSpecialLineComponent implements OnInit {

  searchForm: FormGroup;
  nzLoading = false;
  isVisible = false;
  isZeroVisible = false;
  userTableLoading = false
  userZeroTableLoading = false;

  dataList: any[] = [];
  tableDataList: any[] = [];
  userDataList: any[] = [];
  userZeroDataList: any[] = [];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      group: [],
    });

    for (let i = 0; i < 30; i++) {
      this.tableDataList = [
        ...this.tableDataList,
        {
          id: i,
          group: '集团' + i,
          userNum: Math.random() * 1000000,
          zeroUserNum: Math.random() * 1000,
        }
      ];
    }
    this.dataList = this.tableDataList;

    this.search();
  }

  search(){
  }

  userShowModal(): void {
    this.isVisible = true;
    for (let i = 0; i < 30; i++) {
      this.userDataList = [
        ...this.userDataList,
        {
          id: i,
          user: '用户'+ i,
          ip: '177.56.2.' + i,
          city: '丰泽区',
          equip: '设备' + i,
          bandWidth: Math.random() * 100
        }
      ];
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  userZeroShowModal(): void {
    this.isZeroVisible = true;
    for (let i = 0; i < 30; i++) {
      this.userZeroDataList = [
        ...this.userZeroDataList,
        {
          id: i,
          user: '用户'+ i,
          ip: '177.56.2.' + i,
          city: '丰泽区',
          equip: '设备' + i,
          bandWidth: Math.random() * 100
        }
      ];
    }
  }

  handleZeroOk(): void {
    console.log('Button ok clicked!');
    this.isZeroVisible = false;
  }

  handleZeroCancel(): void {
    console.log('Button cancel clicked!');
    this.isZeroVisible = false;
  }
}
