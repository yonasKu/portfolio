import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  activeSection: string = 'home';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    if (window.innerWidth <= 1200) {
      this.isMenuOpen = false; // Close menu after selection on mobile
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'about', 'services', 'work', 'contact'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          this.activeSection = section;
        }
      }
    }
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    // Check if click is outside menu and not on menu button
    const target = event.target as HTMLElement;
    const isMenuElement = target.closest('.navbar-left') !== null;
    const isMenuButtonClicked = target.closest('.toggler-menu') !== null;

    if (!isMenuElement && !isMenuButtonClicked && this.isMenuOpen) {
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
