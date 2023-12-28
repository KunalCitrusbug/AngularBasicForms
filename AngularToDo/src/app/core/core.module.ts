import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoChildComponent } from './todo-child/todo-child.component';
import { FormsModule } from '@angular/forms';
import { UsdConvertPipe } from '../pipe/usd-convert.pipe';




@NgModule({
  declarations: [
    TodoComponent,
    TodoChildComponent,
    UsdConvertPipe
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    TodoComponent
  ]
})
export class CoreModule { }
