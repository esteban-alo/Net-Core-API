import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class StudentService {
	private serviceURL = environment.serviceUrl;

	constructor(
		private http: HttpClient, 
		private router: Router
	) { }

	private getData(url: string, params: string) {
		if (url != null) {
			return this.http.get(this.serviceURL + url + (params != null ? "/" + params : ""))
				.pipe(
					map(data => {
						return data
					})
					, catchError(error => {
						return observableThrowError(error || "Server Error")
					})
				);
		}
	}
	private postData(url: string, body: any) {
		if (url != null) {
			return this.http.post(this.serviceURL + url, body)
				.pipe(
					map(data => { return data })
				);
		}
	}
	private putData(url: string, body: any) {
		if (url != null) {
			return this.http.put(this.serviceURL + url, body)
				.pipe(
					map(data => { return data })
					, catchError(error => {
						return observableThrowError(error || "Server Error")
					})
				);
		}
	}

	private deleteData(url: string, body: any) {
		if (url != null) {
			return this.http.delete(this.serviceURL + url, body)
				.pipe(
					map(data => { return data })
					, catchError(error => {
						return observableThrowError(error || "Server Error")
					})
				);
		}
	}

	public getStudents(){
    return this.getData('api',null);
  }
}