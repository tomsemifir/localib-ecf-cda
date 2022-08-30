import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationModalComponent } from 'src/app/components/locations/location-modal/location-modal.component';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      
  }

}
