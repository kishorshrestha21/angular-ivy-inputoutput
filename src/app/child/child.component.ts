import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Input()getData:any;
childData="Hey I am Child Data";



@Output() sendChildData = new EventEmitter;

onSend(){
  this.sendChildData.emit(this.childData);
}
  ngOnInit() {
  }

}