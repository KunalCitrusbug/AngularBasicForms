import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent implements OnInit {

  constructor() { }
  @Input() item = 0
  @Input() name = 'test'

  @Output() updateNameEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
