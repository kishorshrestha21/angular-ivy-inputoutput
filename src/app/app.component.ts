import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Input Output";
  parentData = "Hi i am parent data";

  dataFromChild: any;

  userInputVals = [];
  adminInputVals = [];

  parentUsersCount: number = 0;
  parentAdminsCount: number = 0;

  onGetData(dataVal) {
    this.dataFromChild = dataVal;
  }

  getUserVal(myVal) {
    this.userInputVals.push(myVal);
  }

  getAdminVal(myVal) {
    this.adminInputVals.push(myVal);
  }

  getNewUsersCount(myNewCount) {
    this.parentUsersCount = myNewCount;
  }

  getNewAdminsCount(myNewCount) {
    this.parentAdminsCount = myNewCount;
  }

  removeUser(i) {
    if (window.confirm("Are you sure want to delete?")) {
      this.userInputVals.splice(i, 1);
      this.parentUsersCount = this.parentUsersCount - 1;
    }
  }

  removeAdmin(i) {
    if (window.confirm("Are your sure want to delete?")) {
      this.adminInputVals.splice(i, 1);
      this.parentAdminsCount = this.parentAdminsCount - 1;
    }
    
  }

}
