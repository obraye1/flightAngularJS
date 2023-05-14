import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  flights: Array<any> = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getArrivals().subscribe((results: any) => {
      console.log(results);
      this.flights = [...results]
    });

    this.userService.getDepartures().subscribe((results: any) => {
      console.log(results);
      this.flights = [...results]
    });
  }

  logOut() {
    this.authService.onLogOut();
    this.router.navigate(['/loginregister']);
  }
}