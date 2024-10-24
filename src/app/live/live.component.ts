import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent {
  title = 'На живо';
  mode: ProgressBarMode = 'determinate';
  value = 32;
  bufferValue = 100;
  safeURL: any;

  constructor(private sanitizer: DomSanitizer) {
    let videoURL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
