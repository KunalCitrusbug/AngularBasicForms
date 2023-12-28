import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() value: string = "Kunal";
  constructor() {
    console.log("constructor Called")
    // console.log(this.value)
   }

  ngOnChanges(change:SimpleChange){
    console.log("ngOnChanges Called")
    console.log(change)

  }

   ngOnInit(): void {
    console.log("ngOnInit Called")
    // console.log(this.value)
  }

  ngDoCheck(){
    console.log("ngDoCheck Called")

  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Called")
  }
  
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Called")
  }
  
  ngOnDestroy(){
    console.log("ngOnDestroy Called")
  }

  

}
