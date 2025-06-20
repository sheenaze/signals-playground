import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {AnimateOnScroll} from "primeng/animateonscroll";

@Component({
  selector: 'app-home-page',
  imports: [
    Button,
    AnimateOnScroll
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
