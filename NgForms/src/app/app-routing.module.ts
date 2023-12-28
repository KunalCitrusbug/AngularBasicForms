import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:"add-user",component:UserFormsComponent
  },
  {
    path:"", component:HomepageComponent
  },
  {
    path:"add-user-reactive",component:ReactiveFormsComponent
  },
  {
    path:"**", component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
