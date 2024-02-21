import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'add-user', component: FormDataComponent },
  { path: 'user-list', component: UserListComponent },
  {path:"",  redirectTo:'add-user', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
