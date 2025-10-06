import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { ToDoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule, FormsModule, TodoItemComponent],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';
  search = '';
  editingTodo?: Todo | null;

  @Output() editTodo = new EventEmitter<Todo>();

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.todoService.todo$.subscribe((todos) => {
      this.todos = todos;
      this.applyFilters();
    });
  }

  applyFilters() {
    const q = this.search.trim().toLowerCase();
    this.filteredTodos = this.todos.filter((t) => {
      if (this.filter === 'active' && t.completed) return false;
      if (this.filter === 'completed' && !t.completed) return false;
      if (q) {
        return (
          t.title.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }

  setFilter(f: 'all' | 'active' | 'completed') {
    this.filter = f;
    this.applyFilters();
  }

  onToggle(todo: Todo) {
    this.todoService.toggleComplete(todo.id);
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }

  onEdit(todo: Todo) {
    this.editingTodo = todo;
    this.editTodo.next(todo);
  }

  onSavedFromForm() {
    this.editingTodo = undefined;
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  toggleCompleted(todo: any) {
    todo.completed = !todo.completed;

    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const index = todos.findIndex((t: any) => t.id === todo.id);

    if (index !== -1) {
      todos[index].completed = todo.completed;
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
}
