import { Component, OnInit } from '@angular/core';
import { CenteralDataService } from '../centeral-data.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private _msgSrevice:CenteralDataService) { }
employees=[];
  ngOnInit() {
    this._msgSrevice.employees().subscribe(employeesData => this.employees =employeesData)
  }

}