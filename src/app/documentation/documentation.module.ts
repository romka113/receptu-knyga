import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './components/help/help.component';
import { FAQComponent } from './components/faq/faq.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'FAQ', component: FAQComponent },
  { path: 'Help', component: HelpComponent },
];
@NgModule({
  declarations: [HelpComponent, FAQComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DocumentationModule {}
