import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
      return this.http.get(`${this.apiUrl}?per_page=10`)
  }
}
