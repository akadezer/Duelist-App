import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private http = inject(HttpClient);

  username: string = '';
  password: string = '';

  onSubmit() {
    let requsestBody = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post(
        '/user',
        { id: 1 },
        { headers: { 'Content-Type': 'application/json' } },
      )
      .subscribe((res) => {
        console.log(res);
      });
    // Here you can add your authentication logic
  }
}
