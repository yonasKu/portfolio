import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isMenuElement = target.closest('.menu') !== null;
    const isMenuButtonClicked = target.classList.contains('toggler-menu');

    if (!isMenuElement && !isMenuButtonClicked) {
      this.isMenuOpen = false;
    }
  }
  socialMediaLinks = [
    { icon: 'fab fa-twitter', url: 'https://twitter.com' },
    {
      icon: 'fab fa-instagram',
      url: 'https://instagram.com',
    },
    { icon: 'fab fa-facebook', url: 'https://facebook.com' },
    {
      icon: 'fab fa-pinterest',
      url: 'https://pinterest.com',
    },
  ];
}
