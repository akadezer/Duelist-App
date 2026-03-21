import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserObserver implements Observer<
  HttpResponse<{ message: string }>
> {
  next: (value: HttpResponse<{ message: string }>) => void;
  error: (err: any) => void;
  complete: () => void;

  constructor() {
    this.next = (value: HttpResponse<{ message: string }>) => {
      console.log(value.status);
      console.log('test');
      console.log(value.body?.message);
    };

    this.error = (err: any) => {
      alert('Error occurred: ' + err.error?.message);
    };

    this.complete = () => {};
  }
}
