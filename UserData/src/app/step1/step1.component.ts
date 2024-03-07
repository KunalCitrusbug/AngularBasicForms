// step1.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepNavigationService } from '../step-navigation.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  Step1Form: FormGroup;

  constructor(private fb: FormBuilder, private stepNavigationService: StepNavigationService, private router: Router) {
    this.Step1Form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    currentStep$: Observable<number>; 
    this.stepNavigationService.setCurrentStep(1);
  }
  get name(){
    return this.Step1Form.get('name')
  }


  onSubmit() {
    const nameValue = this.Step1Form.controls['name'].value;
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['name'] = nameValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));
  
      // If successful, increment the current step
      this.navigateToNextStep();

      console.log('Updated temp_data saved to local storage:', tempData);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving data to local storage:', error);
    }
  }
  private navigateToNextStep() {
    const currentStep = this.stepNavigationService.getCurrentStep();
    this.stepNavigationService.setCurrentStep(currentStep + 1);
    console.log(currentStep,"currr")

    this.router.navigate([`/step${currentStep  + 1}`]);
  }
}

