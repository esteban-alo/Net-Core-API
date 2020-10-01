import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Student, IStudent } from 'src/app/models/Student';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {

  public dataSource = new MatTableDataSource<IStudent>();
  public displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'age', 'career', 'options'];

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
