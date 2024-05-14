import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToTab(tabName: string) {
    this.router.navigate(['tabs', tabName]);
  }

}
