import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { ToDoService } from '../../services/todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class TodoFormComponent implements OnChanges {
  @Input() todoToEdit?: Todo | null;
  @Output() saved = new EventEmitter<void>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService: ToDoService) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoToEdit'] && this.todoToEdit) {
      this.form.patchValue({
        title: this.todoToEdit.title,
        description: this.todoToEdit.description ?? '',
      });
    } else if (changes['todoToEdit'] && !this.todoToEdit) {
      this.form.reset();
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const { title, description } = this.form.value;

    if (this.todoToEdit) {
      this.todoService.updateTodo({ ...this.todoToEdit, title, description });
    } else {
      this.todoService.addTodo(title, description);
    }

    this.form.reset();
    this.saved.emit();
  }
}
