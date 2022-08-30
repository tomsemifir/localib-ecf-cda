import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  vehicules : Vehicule[] = [];
  showErrorDialog = false;
  showForm = false;

  vehiculeForm : FormGroup = this.fb.group({
    immatriculation : "",
    marque : "",
    modele : "",
    etat : "",
    prix : 0,
    status : "",
    type: ""
  })

  constructor(
    private service : VehiculeService,
    private fb : FormBuilder
  ) {}

  ngOnInit(): void {
      this.initVehicules();
  }

  switchShowForm() {
    this.showForm = !this.showForm;
  }

  initVehicules() {
    this.service.findAll().subscribe({
      next: (data) => {
        this.vehicules = data;
      }
    })
  }

  addVehicule() {
    this.service.create(this.vehiculeForm.value).subscribe({
      next: () => {
        this.initVehicules();
        this.vehiculeForm.reset();
      }
    })
  }

  deleteVehicule(id : number) {
    this.service.delete(id).subscribe({
      next: () => {
        this.initVehicules();
      },
      error: (err) => {
        this.showErrorDialog = true;
        setTimeout(() => {
          this.showErrorDialog = false;
        }, 5000)
      }
    })
  }

}
