import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css']
})
export class UserLinkComponent implements OnInit {
  allList: any[] = [];
  dataList: any[];
  searchForm: FormGroup;
  currSearchType = 0;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      brasEquip: [],
      brasPort: [],
      switcherEquip: [],
      switcherDownPort: [],
      oltIp: [],
      pon: [],
      searchType: [0]
    });
    for (let i = 0; i < 50; i++) {
      this.allList = [
        ...this.allList,
        {
          brasEquip: '设备' + i,
          brasPort: '1052',
          switcherEquip: '交换机' + i,
          switcherDownPort: '1060',
          oltIp: '10.10.10.10',
          pon: 'pon' + i
        }
      ];
    }
    this.dataList = this.allList;
  }

  searchTypeChange(type: any): void {
    this.currSearchType = type;
  }

  resetSearchForm(): void {
    this.searchForm.reset();
    this.searchForm.get('searchType').setValue(0);
    this.searchTypeChange(0);
  }

  search(): void {
    const rawValue = this.searchForm.getRawValue();
    console.log(rawValue);
    console.log(this.currSearchType);
    if (this.currSearchType === 0) {
      this.dataList = this.allList
        .filter(value => {
            const brasEquip: string = value.brasEquip;
            const brasPort: string = value.brasPort;
            if (rawValue.brasEquip && rawValue.brasPort) {
              return brasEquip.includes(rawValue.brasEquip) && brasPort.includes(rawValue.brasPort);
            } else if (rawValue.brasEquip) {
              return brasEquip.includes(rawValue.brasEquip);
            } else if (rawValue.brasPort) {
              return brasPort.includes(rawValue.brasPort);
            } else {
              return true;
            }
          }
        );
    } else if (this.currSearchType === 1) {
      this.dataList = this.allList
        .filter(value => {
            const switcherEquip: string = value.switcherEquip;
            const switcherDownPort: string = value.switcherDownPort;
            if (rawValue.switcherEquip && rawValue.switcherDownPort) {
              return switcherEquip.includes(rawValue.switcherEquip) && switcherDownPort.includes(rawValue.switcherDownPort);
            } else if (rawValue.switcherEquip) {
              return switcherEquip.includes(rawValue.switcherEquip);
            } else if (rawValue.switcherDownPort) {
              return switcherDownPort.includes(rawValue.switcherDownPort);
            } else {
              return true;
            }
          }
        );
    } else if (this.currSearchType === 2) {
      this.dataList = this.allList
        .filter(value => {
            const oltIp: string = value.oltIp;
            const pon: string = value.pon;
            if (rawValue.oltIp && rawValue.pon) {
              return oltIp.includes(rawValue.oltIp) && pon.includes(rawValue.pon);
            } else if (rawValue.oltIp) {
              return oltIp.includes(rawValue.oltIp);
            } else if (rawValue.pon) {
              return pon.includes(rawValue.pon);
            } else {
              return true;
            }
          }
        );
    }else {
      this.dataList = [];
    }
  }
}
