import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CenteralDataService {

commonMessage(){
 alert("Thanks for subscribe");
}


myDatas=[
  {name:"Ram", age:22, city:"New York"},
  {name:"Shyam", age:23, city:"New York"},
  {name:"Hari", age:20, city:"New York"},
  {name:"Ganesh", age:25, city:"New York"}

]
  constructor(private _http:HttpClient) { }

  employees():Observable<any>{
  return this._http.get("https://jsonplaceholder.typicode.com/users")
  }

}