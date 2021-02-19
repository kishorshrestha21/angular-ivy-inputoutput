import { Component, OnInit } from '@angular/core';
import { CenteralDataService } from '../centeral-data.service';

@Component({
  selector: 'app-my-service-one',
  templateUrl: './my-service-one.component.html',
  styleUrls: ['./my-service-one.component.css']
})
export class MyServiceOneComponent implements OnInit {


  constructor(private _msgService:CenteralDataService) { }

  messageAlert(){
    this._msgService.commonMessage();
  }

  myDatas=[];

  ngOnInit() {
    this.myDatas = this._msgService.myDatas;
  }

}