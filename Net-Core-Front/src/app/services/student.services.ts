import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student } from '../models/Student';


@Injectable({
	providedIn: 'root'
})
export class StudentService {

	private serviceURL = environment.serviceUrl;
	private servicePath = "/api/students";

	constructor(
		private http: HttpClient,
		private router: Router
	) { }
	
	// GET Action
	private getData(params: string) {
		return this.http.get(this.serviceURL + this.servicePath + (params != null ? "/" + params : ""))
			.pipe(
				map(data => {
					return data
				})
				, catchError(error => {
					return observableThrowError(error || "Server Error")
				})
			);
	}

	// POST Action
	private postData(body: any) {
		return this.http.post(this.serviceURL + this.servicePath, body)
			.pipe(
				map(data => { return data })
			);
	}

	// PUT Action
	private putData(params: string, body: any) {
		return this.http.put(this.serviceURL + this.servicePath + "/" + params, body)
			.pipe(
				map(data => { return data })
				, catchError(error => {
					return observableThrowError(error || "Server Error")
				})
			);
	}

	// DELETE Action
	private deleteData(body: any) {
		return this.http.delete(this.serviceURL + this.servicePath + '?id=' + body)
			.pipe(
				map(data => { return data })
				, catchError(error => {
					return observableThrowError(error || "Server Error")
				})
			);
	}

	// Return the list of all students
	public getStudents() {
		return this.getData(null);
	}

	// Return a student by Id
	public getStudentById(studentId: string) {
		return this.getData(studentId);
	}

	// Creates a new student
	public addStudent(student: Student) {
		return this.postData(student);
	}

	// Update student information
	public updateStudent(student: Student) {
		return this.putData(student.id.toString(), student);
	}

	// Deletes a student
	public deleteStudent(student: Student) {
		return this.deleteData(student.id.toString());
	}
}