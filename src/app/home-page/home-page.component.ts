import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLoggedIn() {
    return this.authService.getToken() ? true : false;
  }
  logOut() {
    this.authService.logOut();
    alert('Succesfully logged out');
  }
}
