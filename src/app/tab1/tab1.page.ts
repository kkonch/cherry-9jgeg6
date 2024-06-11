import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PhaseService } from '../services/phase-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements AfterViewInit {
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
  doughnutChart: any;
  currentDate: Date;
  phaseName: string = '?';
  previousBool: boolean = false;

  constructor(private phaseService: PhaseService, private router: Router) {
    this.currentDate = new Date();
    this.phaseName = this.phaseService.allPhaseData()[0].phaseName;
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    const ctx = this.doughnutCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            label: '# of days',
            data: [7, 7, 10, 4],
            backgroundColor: [
              '#84012A',
              '#4F5172',
              '#989FC7',
              '#282749',
            ],
            hoverBackgroundColor: [
              '#D50043',
              '#37338C',
              '#4A74D5',
              '#0612A7',
            ]
          }]
        }, 
        options: {
          cutout: '70%'
        }
      });
    }
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
}
