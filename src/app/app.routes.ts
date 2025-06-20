import { Routes } from '@angular/router';
import * as path from "node:path";
import {HomePageComponent} from "./pages/home-page/home-page.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent}
];
