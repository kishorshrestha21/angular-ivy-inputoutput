import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-count',
  templateUrl: './child-count.component.html',
  styleUrls: ['./child-count.component.css']
})
export class ChildCountComponent implements OnInit {

@Input() countFormParent:any;

@Output() newChildCount=new EventEmitter();

onPlusChildCount(){
  this.countFormParent = this.countFormParent +1
  this.newChildCount.emit(this.countFormParent);
}
  constructor() { }

  ngOnInit() {
  }

}