import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TwowayComponent } from './twoway/twoway.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentServiceService } from './services/student-service.service';
import {HttpClientModule} from '@angular/common/http';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TwowayComponent,
    ChildComponent,
    Child2Component,
    PipesComponent,
    CustomPipe,
    StudentListComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
