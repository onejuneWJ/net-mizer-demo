import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  searchForm: FormGroup;
  dataList: any[] = [];
  dataSource: any[] = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      username: []
    });

    for (let i = 0; i < 50; i++) {
      this.dataSource = [
        ...this.dataSource,
        {
          username: '用户' + i,
          innerVlan: 'VLAN',
          bras: 'BRAS',
          brasPort: '1001',
          oltIp: '10.10.10.10',
          pon: 'PON1'
        }
      ];
    }
    this.dataList = this.dataSource;
  }

  search(): void {

  }
}
