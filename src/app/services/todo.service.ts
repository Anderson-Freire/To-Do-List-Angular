import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.model';
import { enviroment } from '../../enviroments/enviroments';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  private todoSubject = new BehaviorSubject<Todo[]>(this.loadFromStorage());
  todo$ = this.todoSubject.asObservable();

  private loadFromStorage(): Todo[] {
    const raw = localStorage.getItem(enviroment.STORAGE_KEY.TODOS);
    return raw ? JSON.parse(raw) : [];
  }

  private save(todos: Todo[]) {
    localStorage.setItem(enviroment.STORAGE_KEY.TODOS, JSON.stringify(todos));
    this.todoSubject.next(todos);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
  }

  getValue(): Todo[] {
    return this.todoSubject.value;
  }

  addTodo(title: string, description?: string) {
    const newTodo: Todo = {
      id: this.generateId(),
      title,
      description,
      completed: false,
      createdAt: Date.now(),
    };
    this.save([newTodo, ...this.todoSubject.value]);
  }

  updateTodo(updated: Todo) {
    const todos = this.todoSubject.value.map((t) =>
      t.id === updated.id ? { ...t, ...updated } : t
    );
    this.save(todos);
  }

  deleteTodo(id: string) {
    this.save(this.todoSubject.value.filter((t) => t.id !== id));
  }

  toggleComplete(id: string) {
    const todos = this.todoSubject.value.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );

    this.save(todos);
  }

  clearCompleted() {
    this.save(this.todoSubject.value.filter((t) => !t.completed));
  }

  resetAllTodos() {
    localStorage.removeItem(enviroment.STORAGE_KEY.TODOS);
    this.todoSubject.next([]);
  }
}
