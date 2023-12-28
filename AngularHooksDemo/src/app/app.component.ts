import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHooksDemo';
  inputString : string = '';
  onSubmit(input:HTMLInputElement){
    this.inputString = input.value
  }
  destroy : boolean = true;
  destroyComponent(){
    this.destroy = false
  }
}
