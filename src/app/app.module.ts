import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceptuFormComponent } from './components/receptu-form/receptu-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReceptBookListComponent } from './components/recept-book-list/recept-book-list.component';

@NgModule({
  declarations: [AppComponent, ReceptuFormComponent, ReceptBookListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
