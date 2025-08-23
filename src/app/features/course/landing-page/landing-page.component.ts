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

  
}
