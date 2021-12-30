import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Student } from './model/student';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'I Love India';

  public flag: boolean = false;
  public names: string[] = ["Name1", "Name2", "Name3", "Name4", "Name5"];

  public students: Student[] = [
    { id: 1, name: "superstar" },
    { id: 2, name: "Bashabhai" },
    { id: 3, name: "Kalaiyaan" }
  ];

  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[]|null>|any): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }



  doHandleAddStudent(data: any) {
    console.log(data);
    this.students.push(data);
  }

  onTitleChange(e: any) {
    console.log(e.target.value);
    let val = e.target.value;
    this.title = val;
  }

  doHandleToggle() {
    this.flag = !this.flag;
  }

  doReadData(val: string) {
    alert(val);
  }
}
