import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private router: Router) { }
    addRecipe() {
        this.router.navigate(['/add']);
    }
    moveHome() {
        this.router.navigate(['/']);
    }
    signUp() {
        this.router.navigate(['/signup']);
    }
    logIn() {
        this.router.navigate(['/login']);
    }
}
