import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  private ethiopicChars: string[] = ['ዮ', 'ና', 'ስ', 'ቁ', 'ም', 'ላ', 'ቸ', 'ው'];
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private chars: { 
    char: string, 
    angle: number, 
    alpha: number, 
    isActive: boolean, 
    transitionProgress: number,
    lastActivation: number,
    cooldown: number 
  }[] = [];
  
  private lastTime: number = 0;
  private readonly FRAME_RATE = 1000 / 60; // 60 FPS
  private readonly COOLDOWN_BASE = 500; // Base cooldown in ms
  private colorCache: Map<number, string> = new Map();
  private devicePixelRatio: number = 1;
  private intersectionObserver: IntersectionObserver | null = null;
  private hasAnimated = false;

  // Text scramble properties - Initialize with random chars so text is visible
  displayAboutMe = this.getRandomString(8);
  displayProfessionalBg = this.getRandomString(23);
  displayName = this.getRandomString(17);
  displayTitle = this.getRandomString(29);
  private readonly finalAboutMe = 'About Me';
  private readonly finalProfessionalBg = 'Professional Background';
  private readonly finalName = 'Yonas Kumelachew';
  private readonly finalTitle = 'Software Development Engineer';

  private getRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  ngOnInit() {
    this.devicePixelRatio = window.devicePixelRatio || 1;
    setTimeout(() => {
      this.initializeCanvas();
      this.setupResizeObserver();
    }, 100);
  }

  ngAfterViewInit() {
    // Set up intersection observer to trigger animation when section is visible
    this.setupScrollObserver();
  }

  private setupScrollObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the section is visible
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          // Start text scramble animation when section becomes visible
          setTimeout(() => {
            this.scrambleText(this.finalAboutMe, 'aboutMe', 30);
            setTimeout(() => {
              this.scrambleText(this.finalProfessionalBg, 'professionalBg', 25);
            }, 400);
            setTimeout(() => {
              this.scrambleText(this.finalName, 'name', 30);
            }, 1200);
            setTimeout(() => {
              this.scrambleText(this.finalTitle, 'title', 30);
            }, 1800);
          }, 100);
        }
      });
    }, options);

    // Observe the about section container
    const aboutSection = document.querySelector('app-about .container');
    if (aboutSection) {
      this.intersectionObserver.observe(aboutSection);
    }
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    this.colorCache.clear();
  }

  scrambleText(finalText: string, type: 'aboutMe' | 'professionalBg' | 'name' | 'title', speed: number) {
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
      
      switch(type) {
        case 'aboutMe':
          this.displayAboutMe = scrambledText;
          break;
        case 'professionalBg':
          this.displayProfessionalBg = scrambledText;
          break;
        case 'name':
          this.displayName = scrambledText;
          break;
        case 'title':
          this.displayTitle = scrambledText;
          break;
      }
      
      iteration += 1 / 3;
      
      if (iteration >= length) {
        clearInterval(interval);
        switch(type) {
          case 'aboutMe':
            this.displayAboutMe = finalText;
            break;
          case 'professionalBg':
            this.displayProfessionalBg = finalText;
            break;
          case 'name':
            this.displayName = finalText;
            break;
          case 'title':
            this.displayTitle = finalText;
            break;
        }
      }
    }, speed);
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(this.debounce(() => {
      if (this.ctx && this.ctx.canvas) {
        const container = document.querySelector('.avatar-border-outer');
        if (container) {
          const rect = container.getBoundingClientRect();
          this.updateCanvasSize(this.ctx.canvas, rect);
        }
      }
    }, 250));

    const container = document.querySelector('.avatar-border-outer');
    if (container) {
      this.resizeObserver.observe(container);
    }
  }

  private updateCanvasSize(canvas: HTMLCanvasElement, rect: DOMRect) {
    const width = rect.width * this.devicePixelRatio;
    const height = rect.height * this.devicePixelRatio;
    
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      this.initializeChars();
    }
  }

  private debounce(func: Function, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  private getColorString(progress: number, alpha: number): string {
    const key = Math.floor(progress * 1000) + alpha * 10000;
    let color = this.colorCache.get(key);
    
    if (!color) {
      const pink = { r: 175, g: 38, b: 118 };
      const white = { r: 255, g: 255, b: 255 };
      
      const r = Math.round(pink.r + (white.r - pink.r) * progress);
      const g = Math.round(pink.g + (white.g - pink.g) * progress);
      const b = Math.round(pink.b + (white.b - pink.b) * progress);
      
      color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      this.colorCache.set(key, color);
    }
    
    return color;
  }

  private initializeCanvas() {
    const container = document.querySelector('.avatar-border-outer');
    if (!container) return;

    const canvas = document.createElement('canvas');
    const rect = container.getBoundingClientRect();
    
    this.ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true 
    });
    
    if (this.ctx) {
      canvas.classList.add('ethiopic-matrix');
      container.appendChild(canvas);
      this.updateCanvasSize(canvas, rect);
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = 'high';
      
      this.lastTime = performance.now();
      this.animate();
    }
  }

  private initializeChars() {
    if (!this.ctx) return;
    
    const radius = (Math.min(this.ctx.canvas.width, this.ctx.canvas.height) / 2) - 5 * this.devicePixelRatio;
    const circumference = 2 * Math.PI * radius;
    const charSize = 20 * this.devicePixelRatio;
    const totalChars = Math.min(25, Math.floor(circumference / charSize));
    const angleStep = (2 * Math.PI) / totalChars;
    
    this.chars = Array.from({ length: totalChars }, (_, i) => ({
      char: this.ethiopicChars[i % this.ethiopicChars.length],
      angle: i * angleStep,
      alpha: 0.8,
      isActive: false,
      transitionProgress: 0,
      lastActivation: 0,
      cooldown: this.COOLDOWN_BASE + Math.random() * 500
    }));
  }

  private animate() {
    if (!this.ctx || !this.ctx.canvas) return;

    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTime;

    if (deltaTime < this.FRAME_RATE) {
      this.animationId = requestAnimationFrame(() => this.animate());
      return;
    }

    const ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const radius = (Math.min(ctx.canvas.width, ctx.canvas.height) / 2) - 5 * this.devicePixelRatio;
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const fontSize = Math.max(14, Math.min(18, radius / 8)) * this.devicePixelRatio;
    
    ctx.font = `${fontSize}px "Nyala", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const transitionSpeed = 0.004 * deltaTime;

    this.chars.forEach((charObj) => {
      const x = centerX + radius * Math.cos(charObj.angle);
      const y = centerY + radius * Math.sin(charObj.angle);
      
      if (currentTime - charObj.lastActivation > charObj.cooldown) {
        charObj.isActive = Math.random() < 0.05;
        if (charObj.isActive) {
          charObj.lastActivation = currentTime;
          charObj.cooldown = this.COOLDOWN_BASE + Math.random() * 1000;
        }
      }

      if (charObj.isActive) {
        charObj.transitionProgress = Math.min(1, charObj.transitionProgress + transitionSpeed * 0.8);
      } else {
        charObj.transitionProgress = Math.max(0, charObj.transitionProgress - transitionSpeed * 1.2);
      }

      ctx.fillStyle = this.getColorString(charObj.transitionProgress, charObj.alpha);
      ctx.fillText(charObj.char, x, y);
    });

    this.lastTime = currentTime;
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  getDownloadLink(): string {
    const filePath = 'assets/Cv/Resume.pdf'; 
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV.pdf';
    return link.href;
  }
}
