import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitationFieldsComponent } from './solicitation-fields/solicitation-fields.component';
import { SubmittedPageComponent } from './submitted-page/submitted-page.component';


const routes: Routes = [
  {path: '', children: [
    {path: '', redirectTo: '/solField', pathMatch: 'full'},
    {path: 'solField', component: SolicitationFieldsComponent},
    {path: 'submitted', component: SubmittedPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
