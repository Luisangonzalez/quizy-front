import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'dashboard',
  // },
  { path: 'login', component: LoginComponent },
  // { path: 'characters', component: CharactersComponent, },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})

export class AppRoutingModule {}

export const routedComponents = [LoginComponent];
