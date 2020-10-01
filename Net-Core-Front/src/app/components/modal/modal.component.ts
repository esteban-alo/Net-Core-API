import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IStudent } from 'src/app/interfaces/IStudent';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public createStudentForm: FormGroup;
  public student: Student = new Student();
  public title = 'Create Student';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IStudent,
    private service: StudentService,
    private dialog: MatDialogRef<ModalComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    if (this.data != null) {
      this.title = 'Edit Student Information';
      this.student.id = this.data.id;
      this.student.userName = this.data.userName;
      this.student.firstName = this.data.firstName;
      this.student.lastName = this.data.lastName;
      this.student.age = this.data.age;
      this.student.career = this.data.career;
    }
    this.createStudentForm = this.formBuilder.group(
      {
        UserName: [{ value: '', disabled: false }, ],
        FirstName: [{ value: '', disabled: false }, [Validators.required]],
        LastName: [{ value: '', disabled: false }, [Validators.required]],
        Age: [{ value: '', disabled: false }, [Validators.required]],
        Career: [{ value: '', disabled: false }, [Validators.required]],
      });
  }

  ngOnInit() {
  }

  saveClick() {
    const _student = new Student(this.createStudentForm.value);
    if(_student.userName === "") {
      _student.userName = _student.firstName + _student.lastName;
    }
    if (this.data != null) {
      _student.id = this.student.id;
      this.service.updateStudent(_student).subscribe(
        response => {
          if (response) {
            this.snackBarMessage('Student information updated');
            this.cancelClick();
          }
        }, error => {
          this.snackBarMessage('Can\'t update student information');
        });
    } else {
      this.service.addStudent(_student).subscribe(
        response => {
          if (response) {
            this.snackBarMessage('Student created');
            this.cancelClick();
          }
        }, error => {
          this.snackBarMessage('Can\'t creare student');
        });
    }
  }

  cancelClick() {
    this.dialog.close();
  }

  snackBarMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

}
