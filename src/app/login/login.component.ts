import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = ''; 

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Here you can add your authentication logic
  }
}
