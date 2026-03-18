import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  username: string = '';
  password: string = '';

  onSubmit() {
    let requsestBody = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post('http://localhost:3000/createUser', requsestBody)
      .subscribe((res) => {
        if (res) {
          alert('User created successfully!');
        }
      });
  }

  onCancel() {
    // TODO implement cancel logic, maybe navigate back to start page
  }
}
