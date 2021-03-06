import { Injectable } from '@angular/core';
import { ITaskDetails } from '../interfaces/task-details';

// service which displays and add the task list. Which also returns and accept the properties
@Injectable()
export class TaskService {
  taskArr: ITaskDetails[] = [];
  taskDetails = {
    title: '',
    description: '',
    date: null
  };

  setData(obj: ITaskDetails) {
    this.taskDetails.title = obj.title;
    this.taskDetails.description = obj.description;
    this.taskDetails.date = obj.date;
    this.taskArr.push({ ...this.taskDetails });
  }

  getdata() {
    return this.taskArr;
  }
  constructor() { }

}
