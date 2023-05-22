import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDto } from '../interfaces/user.interface';
import { environment } from 'src/environments/environments';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usernameChanged: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  createUser(newUser: UserDto): Observable<UserDto> {
    console.log('nuevo user', newUser);
    return this.http.post<UserDto>(`${environment.API}/user`, newUser);
  }

  login(email: string, password: string): Observable<any> {
    const user = { email: email, password: password };
    return this.http.post(`${environment.API}/user/login`, user).pipe(
      map( (res:any) => res[0])
    );
  }

  getUsername$(): Observable<string> {
    return this.usernameChanged.asObservable();
  }

  emitUsername(username: string) {
    this.usernameChanged.next(username);
  }
}