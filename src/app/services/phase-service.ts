import { Injectable } from "@angular/core";
import { PhaseData } from "../data/phase-data";
import { Preferences, SetOptions, GetOptions } from '@capacitor/preferences'


@Injectable({
    providedIn: 'root'
})


export class PhaseService {
    private static data: PhaseData[] = []
    // calculate what phase they are in from last bleed & symptoms

    constructor() {
        this.addDefaultData();
    }

    private addDefaultData() {
        this.addPhaseSymptom(new PhaseData(new Date('May 23, 2024 05:14:00'), ['light', 'worried', 'running', 'average', 'vegan']));
    }

    async addPhaseSymptom(phaseData: PhaseData) {
        PhaseService.data.push(phaseData);

        //let key:string = phaseData.keyCreation()

    }

    public allPhaseData() {
        return PhaseService.data;
    }

}