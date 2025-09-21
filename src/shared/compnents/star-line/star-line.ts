import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-star-line',
  imports: [],
  templateUrl: './star-line.html',
  styleUrls: ['./star-line.css'] 
})
export class StarLine {
  @Input() hascolor: boolean = true;
}


