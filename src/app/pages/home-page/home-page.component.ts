import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {AnimateOnScroll} from "primeng/animateonscroll";
import {NavigationButtonComponent} from "../../components/navigation-button/navigation-button.component";

@Component({
  selector: 'app-home-page',
    imports: [
        Button,
        AnimateOnScroll,
        NavigationButtonComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
