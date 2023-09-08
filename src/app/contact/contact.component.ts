import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  submit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Get the user response from the form
    const name = this.name;
    const email = this.email;
    const subject = this.subject;
    const message = this.message;

    // Send the user response to the server
    const url = '/api/contact';

    const body = JSON.stringify({
      name,
      email,
      subject,
      message,
    });

    this.http.post(url, body, { headers }).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}