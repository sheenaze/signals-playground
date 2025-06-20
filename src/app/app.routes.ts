import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {WomenAndCodeDemoPageComponent} from "./pages/women-and-code-demo-page/women-and-code-demo-page.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'women-and-code-june-2025', component: WomenAndCodeDemoPageComponent}
];
