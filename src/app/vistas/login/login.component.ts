import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  usernameUser!: string;

  constructor(public userService: UserService) {}

  login(event: Event) {
    event.preventDefault();
    this.userService.login(this.email, this.password).subscribe(
      (data) => {
        this.userService.emitUsername(data.username);
        console.log('Inicio de sesión exitoso', data);
      },
      (error) => {
        console.log('Error en el inicio de sesión', error);
      }
    );
  }
}
