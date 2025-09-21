import { Component } from '@angular/core';
import { StarLine } from "../../../../shared/compnents/star-line/star-line";

@Component({
  selector: 'app-portfolio',
  imports: [StarLine],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

imagesArr = [
  {
    imgSrc: '/images/poert1.png',
    imageAlt: 'First-Image'
  },
  {
    imgSrc: '/images/port2.png',
    imageAlt: 'First-Image'
  },
  {
    imgSrc: '/images/port3.png',
    imageAlt: 'First-Image'
  },
    {
    imgSrc: '/images/poert1.png',
    imageAlt: 'First-Image'
  },
  {
    imgSrc: '/images/port2.png',
    imageAlt: 'First-Image'
  },
  {
    imgSrc: '/images/port3.png',
    imageAlt: 'First-Image'
  },
]


}
