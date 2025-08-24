import { Component } from '@angular/core';
import { BrandsComponent } from '../brands/brands.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BrandsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  // testimonial-card.component.ts

cards = [
  {
    name: 'Faraz Ahmad',
    course: 'Advanced JavaScript',
    rating: 5,
    text: 'I was a scrub before I discovered ui.dev. I used their Advanced JavaScript course to prepare for interviews and landed a job at Netflix. All their courses are bangers.',
    color: '#ED8FAA', // pink
    image: 'assets/pic1.jpg' // replace with photo path
  },
  {
    name: 'Name2',
    course: 'React Hooks',
    rating: 5,
    text: 'Another awesome testimonial text.',
    color: '#FFC300', // yellow
    image: 'assets/pic2.jpg'
  },
  {
    name: 'Name3',
    course: 'TypeScript',
    rating: 4,
    text: 'Yet another testimonial.',
    color: '#46C47C', // green
    image: 'assets/pic3.jpg'
  },
];

  
getStars(rating: number): number[] {
  return Array(rating);
}
shuffleCards() {
  this.cards = [...this.cards].sort(() => Math.random() - 0.5);
}

  
}
