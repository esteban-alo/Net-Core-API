import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/Student';
import { IStudent } from 'src/app/interfaces/IStudent';
import { StudentService } from 'src/app/services/student.services';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowStudentsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  public pageLoad: boolean = false;
  public dataSource = new MatTableDataSource<IStudent>();
  public displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'age', 'career', 'options'];

  constructor(
    private service: StudentService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getStudents(): void {
    this.pageLoad = true;
    this.service.getStudents().subscribe((response: IStudent[]) => {
      this.dataSource.data = response;
    }, error => {
      console.error(error);
    });
  }

  addStudent(): void {
    this.dialog.open(ModalComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {
      this.changeDetectorRefs.detectChanges();
      this.getStudents();
    });
  }

  editStudent(student: IStudent): void {
    this.dialog.open(ModalComponent, {
      data: student,
      disableClose: true,
    }).afterClosed().subscribe(result => {
      this.changeDetectorRefs.detectChanges();
      this.getStudents();
    }, error => {
      console.error(error);
    });
  }

  deleteStudent(element): void {
    this.service.deleteStudent(element).subscribe(
      response => {
        this.changeDetectorRefs.detectChanges();
        this.getStudents();
        this.snackBarMessage('Student deleted');
      }, error => {
        this.snackBarMessage('Can\'t delete student');
        console.error(error);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  snackBarMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

}
