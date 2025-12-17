import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  isCollapsed: boolean[] = [true, true, true, true, true, true];

  // --- Text Scramble Logic ---
  private intersectionObserver: IntersectionObserver | null = null;
  private hasAnimated = false;
  displayHeader1 = this.getRandomString(11);
  displayHeader2 = this.getRandomString(20);
  private readonly finalHeader1 = 'My Services';
  private readonly finalHeader2 = 'What I Can Do For You';

  private getRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setupScrollObserver();
  }

  ngOnDestroy(): void {
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
            this.scrambleText(this.finalHeader1, 'header1', 30);
            setTimeout(() => {
              this.scrambleText(this.finalHeader2, 'header2', 25);
            }, 300);
          }, 100);
        }
      });
    }, options);

    const section = document.querySelector('app-services .container');
    if (section) {
      this.intersectionObserver.observe(section);
    }
  }

  private scrambleText(finalText: string, type: 'header1' | 'header2', speed: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const length = finalText.length;
    let iteration = 0;
    
    const interval = setInterval(() => {
      const scrambledText = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (type === 'header1') {
        this.displayHeader1 = scrambledText;
      } else {
        this.displayHeader2 = scrambledText;
      }
      
      iteration += 1 / 3;
      
      if (iteration >= length) {
        clearInterval(interval);
        if (type === 'header1') {
          this.displayHeader1 = finalText;
        } else {
          this.displayHeader2 = finalText;
        }
      }
    }, speed);
  }

  toggleCollapse(index: number): void {
    this.isCollapsed[index] = !this.isCollapsed[index];
  }
}
