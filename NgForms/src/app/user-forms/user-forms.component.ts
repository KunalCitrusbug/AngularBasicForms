import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit {

  constructor() { }
  userList : any[]=[];
  ngOnInit(): void {
  }

  formData(data:NgForm){
    console.log("Inside FormData function", data)
    this.userList.push({userId:this.userList.length, name:data.value.name, email:data.value.useremail})
    data.reset()
    
  }

}
