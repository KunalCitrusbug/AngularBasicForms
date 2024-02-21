import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router service


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  userList : any[]=[];
  Step1Form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(1)]),
  })

  Step2Form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email])
  })

  Step3Form = new FormGroup({
    gender: new FormControl('',[Validators.required]),
  })

  Step4Form = new FormGroup({
    age: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(120)]),
  })

  constructor(private router: Router) { }


  SubmitStep1Form() {
    const nameValue = this.Step1Form.controls['name'].value;
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['name'] = nameValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));
  
      // If successful, increment the current step
      this.currentStep++;
      console.log('Updated temp_data saved to local storage:', tempData);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving data to local storage:', error);
    }
  }

  SubmitStep2Form() {
    const emailValue = this.Step2Form.controls['email'].value;
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['email'] = emailValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));
  
      // If successful, increment the current step
      this.currentStep++;
      console.log('Updated step 2 temp_data saved to local storage:', tempData);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving step2 data to local storage:', error);
    }
  }

  SubmitStep3Form() {
    const genderValue = this.Step3Form.controls['gender'].value;
    console.log(genderValue)
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['gender'] = genderValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));
  
      // If successful, increment the current step
      this.currentStep++;
      console.log('Updated step 3 temp_data saved to local storage:', tempData);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving step3 data to local storage:', error);
    }
  }  

  SubmitStep4Form() {
    const ageValue = this.Step4Form.controls['age'].value;
    console.log(ageValue)
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['age'] = ageValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));

      let user_data;
      if(localStorage.getItem("user_data")){
         user_data = JSON.parse(localStorage.getItem("user_data")||
        "")
      }
      else{
         localStorage.setItem( "user_data",JSON.stringify({}))
         user_data = JSON.parse(localStorage.getItem("user_data")||
        "")
         
      }
      
      let data_obj:any = user_data
      data_obj[String(Object.keys(user_data).length)] = JSON.parse(localStorage.getItem("temp_data") || "")
      localStorage.setItem('user_data',JSON.stringify(
        data_obj
      ))
  
      // If successful, increment the current step
      
      console.log('Updated step 4 temp_data saved to local storage:', tempData);
      this.router.navigate(['/user-list']);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving step4 data to local storage:', error);
    }
  }  

  get name(){
    return this.Step1Form.get('name')
  }
  get email(){
    return this.Step2Form.get('email')
  }
  get gender(){
    return this.Step3Form.get('gender')
  }
  get age(){
    return this.Step4Form.get('age')
  }

  ngOnInit(): void {
  }
  currentStep = 1;

  nextStep() {
    // this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

}
