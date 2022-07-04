import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  {
    path: 'documentation',
    loadChildren: () =>
      import('./documentation/documentation.module').then(
        (m) => m.DocumentationModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
