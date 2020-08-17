import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {TaskService} from "../task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title: string = 'ToDo List';
  description: string = 'Add an item';

  form: FormGroup
  isValid: boolean = true

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    })
  }


  addTask(): void {
    if (this.form.valid) {
      this.isValid = true
      this.taskService.addTask({
        ...this.form.value,
        completed: false,
        editable: false,
        id: new Date().getTime().toString()
      })
      this.form.reset()
    } else {
      this.isValid = false
    }
  }

}
