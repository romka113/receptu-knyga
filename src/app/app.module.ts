import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceptuFormComponent } from './components/receptu-form/receptu-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReceptBookListComponent } from './components/recept-book-list/recept-book-list.component';
import { IngridientFormComponent } from './components/ingridient-form/ingridient-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ReceptItemComponent } from './components/recept-book-list/recept-item/recept-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReceptDetailsComponent } from './components/recept-details/recept-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { IngridientComponent } from './components/ingridient/ingridient.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptuFormComponent,
    ReceptBookListComponent,
    IngridientFormComponent,
    ReceptItemComponent,
    NavigationComponent,
    ReceptDetailsComponent,
    IngridientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
