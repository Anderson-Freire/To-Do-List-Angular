import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  imports: [CommonModule],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<Todo>();
  @Output() edit = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();
  @Output() toggleCompleted = new EventEmitter<Todo>();

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onEdit() {
    this.edit.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo);
  }

  onToggleCompleted() {
    this.toggleCompleted.emit(this.todo);
  }
}
