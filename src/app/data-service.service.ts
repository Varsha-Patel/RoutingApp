import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url:string="https://jsonplaceholder.typicode.com/users";


  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url);
  }
}
