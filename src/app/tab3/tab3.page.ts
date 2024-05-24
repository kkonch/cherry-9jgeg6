import { Component } from '@angular/core';
import { PhaseService } from '../services/phase-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private phaseService: PhaseService) {}
    phaseName = this.phaseService.allPhaseData()[0].phaseName;
}
