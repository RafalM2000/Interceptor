import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get<any>(url);
  }
}


