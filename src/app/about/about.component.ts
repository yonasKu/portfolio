import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  getDownloadLink(): string {
    const filePath = 'assets/Cv/Resume.pdf'; 
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV.pdf';

    return link.href;
  }
}
