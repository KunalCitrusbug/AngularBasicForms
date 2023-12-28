import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  show = false;
  visible=true;
  color = 'green';
  switchColor = 'green';
  userNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emily']
  headingColor = 'blue';
  textDecorate = 'underline';
  userDetails = {
    'Alice':{
      age:'25',
      city:'New York',
      country:'USA',
      Account : ['Fb','Wp', 'Twitter']
    },
    'Bob':{
      age:'30',
      city:'London',
      country:'UK',
      Account : ['Fb','Wp']
    },
    'Charlie':{
      age:'28',
      city:'Paris',
      country:'France',
      Account : ['Fb','Wp', 'Twitter', 'Insta']
    },
    'David':{
      age:'35',
      city:'Berlin',
      country:'Germany',
      Account : ['Fb', 'Twitter', 'Insta']

      },
      'Emily':{
        age:'40',
        city:'Tokyo',
        country:'Japan',
        Account : ['Fb', 'Twitter', 'Insta']
        }
  }
  changeColor(){
    if (this.headingColor == 'blue'){
      this.headingColor='red';
      this.textDecorate='None'
    }
    else{
      this.headingColor='blue';
      this.textDecorate='underline'

  }
  }
  userData:any={}
  getFormData(data: FormsModule){
    console.log('form data: ', data);
    this.userData = data
  }
} 
