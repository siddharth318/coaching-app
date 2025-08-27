import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { BRAND_IMAGE, BRAND_TEXT } from '../constants/app.constant';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

  BRAND_TEXT:string=BRAND_TEXT;
  BRAND_IMAGE: String = BRAND_IMAGE;
}
