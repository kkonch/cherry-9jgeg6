import { Component, OnInit } from '@angular/core';
import { PhaseData } from '../data/phase-data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
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

  constructor() {}

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


}
