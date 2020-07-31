import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
  tasks: object[] = [];

  constructor() { }

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(),
      date: new FormControl()
    })
  }

  addTask() {
    this.tasks.unshift({...this.form.value});
    this.onAdd.emit(this.tasks)
    this.form.reset()
  }


}
