import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  userName: any = ''

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName')
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['auth'])
  }

}
