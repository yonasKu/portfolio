import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  @ViewChild('projectsGrid') projectsGrid!: ElementRef;
  
  currentSlide = 0;
  dots: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // Updated for 9 projects

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private gridElement: HTMLElement | null = null;

  ngAfterViewInit() {
    this.updateSlideVisibility();
    this.setupDragListeners();
  }

  ngOnDestroy() {
    this.removeDragListeners();
  }

  private setupDragListeners() {
    this.gridElement = this.projectsGrid.nativeElement;
    if (this.gridElement) {
      this.gridElement.addEventListener('mousedown', this.startDragging.bind(this));
      this.gridElement.addEventListener('mousemove', this.drag.bind(this));
      this.gridElement.addEventListener('mouseup', this.stopDragging.bind(this));
      this.gridElement.addEventListener('mouseleave', this.stopDragging.bind(this));
    }
  }

  private removeDragListeners() {
    if (this.gridElement) {
      this.gridElement.removeEventListener('mousedown', this.startDragging.bind(this));
      this.gridElement.removeEventListener('mousemove', this.drag.bind(this));
      this.gridElement.removeEventListener('mouseup', this.stopDragging.bind(this));
      this.gridElement.removeEventListener('mouseleave', this.stopDragging.bind(this));
    }
  }

  private startDragging(e: MouseEvent) {
    this.isDragging = true;
    this.startX = e.pageX - this.gridElement!.offsetLeft;
    this.scrollLeft = this.gridElement!.scrollLeft;
    this.gridElement!.style.cursor = 'grabbing';
    this.gridElement!.style.userSelect = 'none';
  }

  private drag(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.gridElement!.offsetLeft;
    const walk = (x - this.startX) * 2; // Scroll speed multiplier
    this.gridElement!.scrollLeft = this.scrollLeft - walk;
    this.updateCurrentSlide();
  }

  private stopDragging() {
    this.isDragging = false;
    if (this.gridElement) {
      this.gridElement.style.cursor = 'grab';
      this.gridElement.style.removeProperty('user-select');
    }
  }

  private updateCurrentSlide() {
    if (!this.gridElement) return;
    const slideWidth = this.gridElement.offsetWidth;
    this.currentSlide = Math.round(this.gridElement.scrollLeft / slideWidth);
  }

  nextSlide() {
    if (this.currentSlide < this.dots.length - 1) {
      this.currentSlide++;
      this.updateSlideVisibility();
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlideVisibility();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlideVisibility();
  }

  private updateSlideVisibility() {
    const grid = this.projectsGrid.nativeElement;
    const slideWidth = grid.offsetWidth;
    grid.scrollTo({
      left: this.currentSlide * slideWidth,
      behavior: 'smooth'
    });
  }
}
