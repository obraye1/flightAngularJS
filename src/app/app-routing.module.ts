import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginregister',
    pathMatch: 'full',
  },
  {
    path: 'loginregister',
    component: LoginregisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
