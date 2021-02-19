import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ParentCountComponent } from './parent-count/parent-count.component';
import { ChildCountComponent } from './child-count/child-count.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { CenteralDataService } from './centeral-data.service';
import { MyServiceOneComponent } from './my-service-one/my-service-one.component';
import { MyServiceTwoComponent } from './my-service-two/my-service-two.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],


  declarations: [ AppComponent, HelloComponent, ChildComponent, SecondChildComponent, ParentCountComponent, ChildCountComponent, MyServiceComponent, MyServiceOneComponent, MyServiceTwoComponent, ObservableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CenteralDataService]
})
export class AppModule { }
