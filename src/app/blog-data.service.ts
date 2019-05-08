import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'


})
export class BlogDataService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) {}


  getBlogInfo() {
    return this.http.get(this.ROOT_URL);
  }
}
