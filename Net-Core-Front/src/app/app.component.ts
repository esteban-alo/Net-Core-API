import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { ModalComponent } from './components/modal/modal.component';
import { StudentService } from './services/student.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Net-Core-Front';

  constructor(
    private service: StudentService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  addStudent(): void {
    this.dialog.open(ModalComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {
      this.service.getStudents();
    });
  }
}
