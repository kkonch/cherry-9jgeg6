import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PhaseService } from '../services/phase-service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
//export class Tab1Page implements AfterViewInit {

export class Tab1Page {
  // @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
  // doughnutChart: any;
  currentDate: Date;
  phaseName: string = '?';

  constructor(private phaseService: PhaseService) {
    this.currentDate = new Date();
    this.phaseName = this.phaseService.allPhaseData()[0].phaseName;
    // Chart.register(...registerables);
  }

  // ngAfterViewInit() {
  //   this.doughnutChartMethod();
  // }

  // doughnutChartMethod() {
  //   const ctx = this.doughnutCanvas.nativeElement.getContext('2d');
  //   if (ctx) {
  //     this.doughnutChart = new Chart(ctx, {
  //       type: 'doughnut',
  //       data: {
  //         labels: ['Menstruation', 'Ovulation', 'Follicular', 'Luteal'],
  //         datasets: [{
  //           label: '# of days',
  //           data: [7, 7, 10, 4],
  //           backgroundColor: [
  //             '#84012A',
  //             '#4F5172',
  //             '#989FC7',
  //             '#282749',
  //           ],
  //           hoverBackgroundColor: [
  //             '#4a0017',
  //             '#33344a',
  //             '#737893',
  //             '#10101d',
  //           ]
  //         }]
  //       }
  //     });
  //   }
  // }
}



