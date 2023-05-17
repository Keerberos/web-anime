import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../interfaces/user.interface';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  createUser(newUser: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${environment.API}/user`, newUser);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.API}/user`);
  }
}

