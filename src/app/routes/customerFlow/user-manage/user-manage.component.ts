import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  expireTableLoading = false;
  expireDataList: any[] = [];

  tableDataList: any[] = [];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      this.tableDataList = [
        ...this.tableDataList,
        {
          user: '用户' + i,
          city: '成都',
          equip: '设备' + i,
          ip: '111.111.0.' + i ,
          bandwidthUsage: 89 + Math.random() * 10,
          expireTime: '2021年3月5日'
        }
      ];
    }
    this.expireDataList = this.tableDataList;
  }

}
