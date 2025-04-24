import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.css']
})
export class ImageLightboxComponent {
  @Input() imageUrl: string | null = null;
  @Output() close = new EventEmitter<void>();

  closeLightbox() {
    this.close.emit();
  }

  // Prevent clicks on the image itself from closing the lightbox
  onImageClick(event: Event) {
    event.stopPropagation();
  }
}
