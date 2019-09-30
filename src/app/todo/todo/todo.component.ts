import { Component, OnInit } from '@angular/core';
import { Todo} from '../todo';
import { TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private  todoService : TodoService) { }

  ngOnInit() {
    this.getTodo();
  }

  model : Todo = new Todo( undefined,'', false);

  modelEdit : Todo;

  todo : Todo;
  todoList : Todo[];


  addTodo() {
    if(this.model.name !=""){
    console.log("envio"); 
  
    this.todoService.addTodo(this.model).subscribe(
       todo =>{this.todo=todo,this.getTodo(),this.model.name =""},
       err => console.log(err),
    );

    } 
    }

    getTodo(){
     this.todoService.getTodos().subscribe(
       todoList => this.todoList = todoList,
       err => console.log(err)
     )

    }

    showEditItem(id: number){

      this.modelEdit= this.todoList.find(
         (todo) => todo.id === id
      );

      console.log(id);
    }

    closeInput(){
      this.modelEdit=undefined;
    }

    editItem(){
      this.todoService.updateTodo(this.modelEdit).subscribe(
        res => {console.log(res);this.getTodo();}
      )
    }

}
