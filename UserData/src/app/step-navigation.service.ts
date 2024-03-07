// step-navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepNavigationService {
  private currentStepSubject = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStepSubject.asObservable();

  getCurrentStep(): number {
    return this.currentStepSubject.value;
  }

  setCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }
}
