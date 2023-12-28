import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  dynamic_color : string = 'red'
  num : number = 10;
  test : string = 'Working';
  name : string = "Angular User"
  newName : any  
  date = Date()
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
  arr = [10, 20, 30, 40];
  updateName(data:string){
    this.name = data
    for(let item of this.arr){
      console.warn(item)
    }
  }

  
  ngOnInit(): void {
    
  }

}
