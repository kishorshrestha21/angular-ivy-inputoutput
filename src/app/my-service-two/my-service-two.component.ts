import { Component, OnInit } from '@angular/core';
import { CenteralDataService } from '../centeral-data.service';

@Component({
  selector: 'app-my-service-two',
  templateUrl: './my-service-two.component.html',
  styleUrls: ['./my-service-two.component.css']
})
export class MyServiceTwoComponent implements OnInit {

myDatas=[];
employees=[];

  constructor(private _msgService:CenteralDataService) { }
messageAlert(){
  this._msgService.commonMessage();

}
  ngOnInit() {
      this.myDatas = this._msgService.myDatas;
      this._msgService.employees().subscribe(employeesData => this.employees = employeesData)
  }

}