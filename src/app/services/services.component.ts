import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  isCollapsed: boolean[] = [true, true, true, true]; // Initialize with default collapse state for each item

  toggleCollapse(index: number): void {
    console.log(this.isCollapsed);
    this.isCollapsed[index] = !this.isCollapsed[index];
  }
}
