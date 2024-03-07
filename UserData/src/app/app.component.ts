// app.component.ts
import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from './step-navigation.service'; // Import the StepNavigationService
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentStep$: Observable<number>; // Declare currentStep$ as an Observable

  constructor(private stepNavigationService: StepNavigationService) {
    this.currentStep$ = this.stepNavigationService.currentStep$; // Initialize currentStep$
  }

  ngOnInit() {
  }
}
