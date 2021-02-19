import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-count',
  templateUrl: './parent-count.component.html',
  styleUrls: ['./parent-count.component.css']
})
export class ParentCountComponent implements OnInit {

  parentCount:number=0;
 
  // onGetChildCount(myCount){
  //   this.childCountFromParent =myCount;
  // }

getNewChildCount(newCount){
 this.parentCount = newCount;
}

onMinusCount(){
  this.parentCount= this.parentCount-1;
}
  constructor() { }


  ngOnInit() {
  }

}