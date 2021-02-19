import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-second-child",
  templateUrl: "./second-child.component.html",
  styleUrls: ["./second-child.component.css"]
})
export class SecondChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() boxColor: any;
  @Input() textHead: string;
  @Input() btnText: string;
  @Input() pH: string;
  @Output() getVal = new EventEmitter();
  

  @Input()count:number;
  @Output() newCount = new EventEmitter();
  

  onSendData(inputVal) {
    if (inputVal.value.length > 0) {
      this.getVal.emit(inputVal.value);
      this.count = this.count +1;
      this.newCount.emit(this.count);
   inputVal.value="";
    } else {
      alert("plaese fill out the form.");
    }
  }
}

