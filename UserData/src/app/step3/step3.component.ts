import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepNavigationService } from '../step-navigation.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  Step3Form: FormGroup;
  constructor(private fb: FormBuilder, private stepNavigationService: StepNavigationService, private router: Router) {
    this.Step3Form = this.fb.group({
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    currentStep$: Observable<number>; 
    this.stepNavigationService.setCurrentStep(3);
  }
  onSubmit() {
    const genderValue = this.Step3Form.controls['gender'].value;
    console.log(genderValue)
  
    const storedTempData = localStorage.getItem('temp_data');
    const tempData = storedTempData ? JSON.parse(storedTempData) : {};
    tempData['gender'] = genderValue;
  
    try {
      // Attempt to save the updated 'temp_data' object to local storage
      localStorage.setItem('temp_data', JSON.stringify(tempData));
  
      // If successful, increment the current step
      this.navigateToNextStep();
      console.log('Updated step 3 temp_data saved to local storage:', tempData);
    } catch (error) {
      // Handle any potential errors during local storage save
      console.error('Error saving step3 data to local storage:', error);
    }
  }
  get gender(){
    return this.Step3Form.get('gender')
  }
  private navigateToNextStep() {
    const currentStep = this.stepNavigationService.getCurrentStep();
    this.stepNavigationService.setCurrentStep(currentStep + 1);
    this.router.navigate([`/step${currentStep + 1}`]);
  }
  prevStep(){
    const currentStep = this.stepNavigationService.getCurrentStep();
    console.log(currentStep,"currr")
    this.stepNavigationService.setCurrentStep(currentStep - 1);
    this.router.navigate([`/step${currentStep - 1}`]);

  }

}
