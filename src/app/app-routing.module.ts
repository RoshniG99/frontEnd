import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prodList/prodList.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';

const routes: Routes = [
  { path: 'reactiveForm', component: ReactiveFormComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'prodList', component: ProdListComponent},
  { path: '**', redirectTo: 'reactiveForm', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
