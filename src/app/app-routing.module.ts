import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptItemComponent } from './components/recept-book-list/recept-item/recept-item.component';
import { ReceptBookListComponent } from './components/recept-book-list/recept-book-list.component';
import { ReceptuFormComponent } from './components/receptu-form/receptu-form.component';
import { IngridientFormComponent } from './components/ingridient-form/ingridient-form.component';
import { ReceptDetailsComponent } from './components/recept-details/recept-details.component';
const routes: Routes = [
  {
    path: '',
    component: ReceptBookListComponent,
  },
  { path: 'newRecept', component: ReceptuFormComponent },
  { path: 'newIngridient', component: IngridientFormComponent },
  { path: 'receptDetails/:id', component: ReceptDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
