import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  
  
  user!: FormGroup;
  passwordsMatch: boolean = true;

  constructor(private userService: UserService) {
  }
  
  ngOnInit() {
    this.user = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  checkPassword() {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement;

    this.passwordsMatch = passwordInput.value === confirmPasswordInput.value;
  }

  createUser(event: Event) {
    event.preventDefault();

    const userDto: UserDto = {
      username: this.user.value.username,
      email: this.user.value.email,
      password: this.user.value.password
      // En este código, se crea un nuevo objeto userDto utilizando los valores del formulario
      //  this.user.value. Luego, se pasa este objeto userDto al método createUser del servicio userService.
    };

    this.userService.createUser(userDto).subscribe(
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
