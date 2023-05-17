import { Component } from '@angular/core';
import { UserDto } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  passwordsMatch: boolean = true;

  user: UserDto = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private userService: UserService) {}

  checkPassword() {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement;

    this.passwordsMatch = passwordInput.value === confirmPasswordInput.value;
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('Usuario creado con exito', response);
        // Aquí puedes manejar la respuesta exitosa como redirigir al usuario a otra página o mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al crear el usuario', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario.
      }
    );
  }
}
