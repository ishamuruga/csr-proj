import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  public stuData:Student[]=[];

  @Output()
  public onNewStudentAdd:EventEmitter<Student> = new EventEmitter();

  public stuid:number=0;
  public stuname:string="";

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  doHandleAddStudent(){
    console.log(this.stuid + "," + this.stuname);
    let newStudent:Student = new Student(this.dataService.add(parseInt(this.stuid+""),10),this.stuname);
    this.onNewStudentAdd.emit(newStudent);
  }
    
  

}
