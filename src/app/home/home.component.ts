import {
    Component,
    OnInit,
    ViewEncapsulation
}
from '@angular/core';
import {
    RouterLink
}
from '@angular/router';
import { MaterialModule} from '../material.module';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, MaterialModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    

})
export class HomeComponent {
    public slides = [
            'https://triadatv.free.bg/img/about.jpg',
            'https://triadatv.free.bg/img/news.jpg',
            'https://triadatv.free.bg/img/antenna1.jpg'
        ];

        i: number;
      
        constructor() {
          this.i = 0;
          
        }
        getSlide() {
          return this.slides[this.i];
        }
      
        getPrev() {
          this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
        }
      
        getNext() {
          this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
        }

        mode: ProgressBarMode = 'determinate';
        value = 32;
        bufferValue = 100;


}

