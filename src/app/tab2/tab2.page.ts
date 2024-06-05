import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  items: any  = [];

  ngOnInit(): void {

  }

  constructor() {}

  sectionChange(num: number) {
    console.log(1);
    const calendarContainer = document.getElementById("calendar-container");
    const mainSymptomsContainer = document.getElementById("main-symptoms-container");

    if (calendarContainer && mainSymptomsContainer) {
      switch(num) {
        case 1:
          calendarContainer.style.display = "none";
          mainSymptomsContainer.style.display = "flex";
          break;
        case 2:
          console.log(2);

          calendarContainer.style.display = "flex";
          mainSymptomsContainer.style.display = "none";
          break;

        default:
          break;
      }
    }
  }

  handleCancel() {
    console.log(3);
  }

}
