import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, RoutedComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModifyCountPipe } from './pipe/modify-count.pipe';
import { ModifyDatePipe } from './pipe/modify-date.pipe';
import { QuestionListComponent } from './components/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponent,
    ModifyCountPipe,
    ModifyDatePipe,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
