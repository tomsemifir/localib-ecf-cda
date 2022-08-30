import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {

  @Input() vehicule !: Vehicule;
  @Output() deleteEvent = new EventEmitter<number>();
  editMode = false;

  vehiculeForm : FormGroup = this.fb.group({
    id : 0,
    immatriculation : "",
    marque : "",
    modele : "",
    etat : "",
    prix : 0,
    status : "",
    type: ""
  })

  constructor(
    private fb : FormBuilder,
    private service : VehiculeService
  ) { }

  ngOnInit(): void {
    this.vehiculeForm.patchValue(this.vehicule)
  }

  deleteVehicule() {
    this.deleteEvent.emit(this.vehicule.id);
  }

  switchEditMode() {
    this.editMode = !this.editMode
  }

  editVehicule() {
    this.service.update(this.vehiculeForm.value).subscribe({
      next: (data) => {
        this.vehicule = data;
        this.switchEditMode();
      }
    })
  }

}
