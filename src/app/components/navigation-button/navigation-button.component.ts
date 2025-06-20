import {Component, inject, input} from '@angular/core';
import {Button} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-button',
  imports: [
    Button
  ],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {
  label = input('');
  redirectTo = input('');

  router = inject(Router);

  redirectMeToTheGivenPath(): void{
    this.router.navigate([this.redirectTo()]);
  }

}
