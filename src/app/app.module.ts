import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskComponent} from './task/task.component';
import {SearchByNamePipe} from './searchByName.pipe';
import {SearchByDatePipe} from './searchByDate.pipe';
import {AutofocusFixModule} from 'ngx-autofocus-fix';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    TaskComponent,
    SearchByNamePipe,
    SearchByDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutofocusFixModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
