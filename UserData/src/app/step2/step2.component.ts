import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepNavigationService } from '../step-navigation.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  Step2Form: FormGroup;

  constructor(private fb: FormBuilder, private stepNavigationService: StepNavigationService, private router: Router) {
    this.Step2Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    currentStep$: Observable<number>; 
    this.stepNavigationService.setCurrentStep(2);
  }

  onSubmit() {
    const emailValue = this.Step2Form.controls['email'].value;
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['email'] = emailValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));
  
      // If successful, increment the current step
      this.navigateToNextStep();
      console.log('Updated step 2 temp_data saved to local storage:', tempData);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving step2 data to local storage:', error);
    }
  }
  private navigateToNextStep() {
    const currentStep = this.stepNavigationService.getCurrentStep();
    this.stepNavigationService.setCurrentStep(currentStep + 1);
    console.log(currentStep,"currr")
    
    this.router.navigate([`/step${currentStep + 1}`]);
  }
  prevStep(){
    const currentStep = this.stepNavigationService.getCurrentStep();
    this.stepNavigationService.setCurrentStep(currentStep - 1);
    this.router.navigate([`/step${currentStep - 1}`]);

  }
  get email(){
    return this.Step2Form.get('email')
  }
}
