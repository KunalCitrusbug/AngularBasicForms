import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userList : any[]=[];
  reactiveUserForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email])
  })
  addUser(){
    console.log(this.reactiveUserForm)
    console.log(this.reactiveUserForm.value.email)
    this.userList.push({userId:this.userList.length, name:this.reactiveUserForm.value.name, email:this.reactiveUserForm.value.email})
    this.reactiveUserForm.reset()
  }
  get name(){
    return this.reactiveUserForm.get('name')
  }
  get email(){
    return this.reactiveUserForm.get('email')
  }
  updateValue(){
    console.log("Caleed")
    this.reactiveUserForm.controls['name'].setValue("Kunal Bherwani")
    let name = this.reactiveUserForm.controls['name'].getRawValue()
    alert()
  }
  
  

}
