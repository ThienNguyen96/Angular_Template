import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';
import { Todo } from './models/todo.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  todos: Todo[] = [];
  todo: Todo = null;
  complete: boolean = false;
  title: string = '';

  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.subscription = this.todoService.getAllTodos().subscribe( data => {
      this.todos = data;
    }, error => {
      this.todoService.handleError(error);
    });
  }

  onAddTodo() {
    let todo = new Todo(this.title, this.complete);
    this.subscription = this.todoService.addTodo(todo).subscribe(data => {
      console.log('data ->', data);
      this.loadData();
    }, error => {
      this.todoService.handleError(error);
    });
  }

  onEditItem( item: Todo) {
    this.todo = item;
  }

  onUpdateTodo() {
    this.subscription = this.todoService.updateTodo(this.todo).subscribe(res => {
      console.log('res', res);
      let index = this.getIndex(res.id);
      this.todos[index] = res;
    }, error => {
      this.todoService.handleError(error);
    });
  }

  getIndex(id: number) {
    let rs = 0;
    this.todos.forEach((item, index) => {
      if (item.id === id) {
        rs = index;
      }
    });
    return rs;
  }

  onDeleteItem(id: number) {
    this.subscription = this.todoService.deleteTodo(id).subscribe(res => {
      console.log('res', res);
      this.loadData();
    }, error => {
      this.todoService.handleError(error);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
