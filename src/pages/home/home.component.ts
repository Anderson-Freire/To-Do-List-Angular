import { Component } from '@angular/core';
import { Todo } from '../../app/models/todo.model';
import { TodoListComponent } from '../../app/components/todo-list/todo-list.component';
import { TodoFormComponent } from '../../app/components/todo-form/todo-form.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TodoFormComponent, TodoListComponent],
})
export class HomeComponent {
  editingTodo?: Todo | null;

  onEdit(todo: Todo) {
    this.editingTodo = todo;
  }

  onSaved() {
    this.editingTodo = undefined;
  }
}
