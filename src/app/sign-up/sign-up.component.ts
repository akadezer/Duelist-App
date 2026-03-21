import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserObserver } from '../shared/observer/user.observer';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private http = inject(HttpClient);
  private userObserver = inject(UserObserver);

  username: string = '';
  password: string = '';
  confirmPassword = '';
  email = '';

  onSubmit() {
    let requsestBody = {
      username: this.username,
      password: this.password,
      email: this.email,
    };

    this.http
      .post<{ message: string }>(
        'http://localhost:3000/createUser',
        requsestBody,
        {
          observe: 'response',
        },
      )
      .subscribe(this.userObserver);
  }

  onCancel() {
    // TODO implement cancel logic, maybe navigate back to start page
  }
}
