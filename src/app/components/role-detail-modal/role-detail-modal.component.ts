import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfessionalApp } from '../../professional-experience/professional-experience.component';

@Component({
  selector: 'app-role-detail-modal',
  templateUrl: './role-detail-modal.component.html',
  styleUrls: ['./role-detail-modal.component.css']
})
export class RoleDetailModalComponent {
  @Input() app: ProfessionalApp | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor() { }

  // Method to emit the close event
  close(): void {
    this.closeModalEvent.emit();
  }

  // Prevent closing modal when clicking inside the content
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}