import { Component, OnInit } from '@angular/core';
import { PhaseData } from '../data/phase-data';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
  previousBool: boolean = false;
  items: any  = [];
  periodItems: { name: string, img: string }[] = PhaseData.periodItems;
  painItems: { name: string, img: string }[] = PhaseData.painItems;
  moodItems: { name: string, img: string }[] = PhaseData.moodItems;
  dietItems: { name: string, img: string }[] = PhaseData.dietItems;
  exerciseItems: { name: string, img: string }[] = PhaseData.exerciseItems;
  energyItems: { name: string, img: string }[] = PhaseData.energyItems;
  selectedItems: { [key: string]: any } = {};

  ngOnInit(): void {

  }

  constructor(private router: Router) {}

  sectionChange(num: number) {
    const calendarContainer = document.getElementById("calendar-container");
    const mainSymptomsContainer = document.getElementById("main-symptoms-container");

    if (calendarContainer && mainSymptomsContainer) {
      switch(num) {
        case 1:
          calendarContainer.style.display = "none";
          mainSymptomsContainer.style.display = "flex";
          break;
        case 2:
          calendarContainer.style.display = "flex";
          mainSymptomsContainer.style.display = "none";
          break;

        default:
          break;
      }
    }
  }

  selectItem(row: string, item: any) {
    this.selectedItems[row] = item;
  }

  sideBarAppear(bool: boolean) {
    const backdrop = document.getElementById('more-options-backdrop');
    const sideBar = document.getElementById('side-bar');

    if (!this.previousBool && bool && backdrop && sideBar) {
      backdrop.style.display = 'block';
      backdrop.style.transition = 'opacity 0.5s ease;'
      sideBar.style.display = 'block';
      sideBar.style.transition = 'left 0.5s ease'
      this.previousBool = true;
    }
    else if (this.previousBool && bool && backdrop && sideBar) {
      backdrop.style.display = 'none';
      sideBar.style.display = 'none';
      this.previousBool = false;
    }
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/tabs/tab1']);
  }
}
