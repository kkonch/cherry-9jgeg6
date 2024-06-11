import { Component } from '@angular/core';
import { PhaseService } from '../services/phase-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(private phaseService: PhaseService, private router: Router) {}
    previousBool: boolean = false;
    phaseName = this.phaseService.allPhaseData()[0].phaseName;
    phaseMood = this.phaseService.allPhaseData()[0].phaseInfo[0];
    phaseExercise = this.phaseService.allPhaseData()[0].phaseInfo[1];
    phaseDiet = this.phaseService.allPhaseData()[0].phaseInfo[2];
    phaseEnergy = this.phaseService.allPhaseData()[0].phaseInfo[3];

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
}