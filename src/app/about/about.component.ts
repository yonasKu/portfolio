import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
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

  ngOnInit() {
    this.devicePixelRatio = window.devicePixelRatio || 1;
    setTimeout(() => {
      this.initializeCanvas();
      this.setupResizeObserver();
    }, 100);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.colorCache.clear();
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
