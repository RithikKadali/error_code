import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  getTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
