import { Component, OnInit } from '@angular/core';
import { Todo} from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Todo(1, '', false);

  submitted = false;

  onSubmit() { 
    
    
    this.submitted = true; }

}
