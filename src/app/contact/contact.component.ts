import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

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
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init("qddzyGLfvEYGVjsTh");
  }

  async submit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      await emailjs.send(
        "service_101",
        "template_101",
        {
          from_name: this.name,
          from_email: this.email,
          subject: this.subject,
          message: this.message,
          to_email: "yonijonahphineas0@gmail.com"
        }
      );

      this.submitSuccess = true;
      this.resetForm();
    } catch (error) {
      this.submitError = true;
      console.error('Error submitting form:', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}