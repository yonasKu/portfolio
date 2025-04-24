import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../work/work.component'; // Assuming Project interface is exported from work.component

@Component({
  selector: 'app-project-detail-modal',
  templateUrl: './project-detail-modal.component.html',
  styleUrls: ['./project-detail-modal.component.css']
})
export class ProjectDetailModalComponent {
  @Input() project: Project | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();

  selectedImageUrl: string | null = null; // For lightbox

  constructor() { }

  // Method to emit the close event
  close(): void {
    this.closeModalEvent.emit();
  }

  // Prevent closing modal when clicking inside the content
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  // --- Lightbox Methods ---
  openLightbox(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
  }

  closeLightbox(): void {
    this.selectedImageUrl = null;
  }
  // --- End Lightbox Methods ---
}
