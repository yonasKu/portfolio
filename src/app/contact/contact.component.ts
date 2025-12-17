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

  // Text scramble properties
  private intersectionObserver: IntersectionObserver | null = null;
  private hasAnimated = false;
  displayContactMe = this.getRandomString(10);
  displayLetsConnect = this.getRandomString(13);
  private readonly finalContactMe = 'Contact Me';
  private readonly finalLetsConnect = 'Let\'s Connect';

  private getRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init("qddzyGLfvEYGVjsTh");
  }

  ngAfterViewInit() {
    this.setupScrollObserver();
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupScrollObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          setTimeout(() => {
            this.scrambleText(this.finalContactMe, 'contactMe', 30);
            setTimeout(() => {
              this.scrambleText(this.finalLetsConnect, 'letsConnect', 25);
            }, 300);
          }, 100);
        }
      });
    }, options);

    const contactSection = document.querySelector('app-contact .container');
    if (contactSection) {
      this.intersectionObserver.observe(contactSection);
    }
  }

  scrambleText(finalText: string, type: 'contactMe' | 'letsConnect', speed: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const length = finalText.length;
    let iteration = 0;
    
    const interval = setInterval(() => {
      const scrambledText = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (char === '\'') return '\'';
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (type === 'contactMe') {
        this.displayContactMe = scrambledText;
      } else {
        this.displayLetsConnect = scrambledText;
      }
      
      iteration += 1 / 3;
      
      if (iteration >= length) {
        clearInterval(interval);
        if (type === 'contactMe') {
          this.displayContactMe = finalText;
        } else {
          this.displayLetsConnect = finalText;
        }
      }
    }, speed);
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