import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationModalComponent } from 'src/app/components/locations/location-modal/location-modal.component';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  vehicules : Vehicule[] = [];

  constructor(
    private service : VehiculeService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.initList();
  }

  initList() {
    this.service.findAll().subscribe({
      next: (data) => {
        this.vehicules = data;
      }
    })
  }

  open(vehicule : Vehicule) {
    const modalRef = this.modalService.open(LocationModalComponent, { size: 'xl' });
    modalRef.componentInstance.vehicule = vehicule;
  }

}
