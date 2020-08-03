import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {TaskService} from "../task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAdd: EventEmitter<object[]> = new EventEmitter<object[]>()

  title: string = 'ToDo List';
  description: string = 'Add an item';

  form: FormGroup

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    })
  }


  addTask() {
    if (this.form.valid) {
      this.taskService.addTask({...this.form.value, isHidden: false})
      this.form.reset()
      this.taskService.sortByDateAndName()
    }
  }

}
