import { Component } from '@angular/core';
import { StarLine } from "../../../../shared/compnents/star-line/star-line";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarLine],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
