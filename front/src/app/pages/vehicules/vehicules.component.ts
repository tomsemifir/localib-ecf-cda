import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationModalComponent } from 'src/app/components/vehicules/location-modal/location-modal.component';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent implements OnInit {

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
        console.log(this.vehicules);
        
      }
    })
  }

  open(vehicule : Vehicule) {
    const modalRef = this.modalService.open(LocationModalComponent);
    modalRef.componentInstance.vehicule = vehicule;
  }

}
