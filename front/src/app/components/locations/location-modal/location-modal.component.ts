import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Locataire } from 'src/app/models/locataire';
import { Vehicule } from 'src/app/models/vehicule';
import { LocataireService } from 'src/app/services/locataire.service';
import { LocationService } from 'src/app/services/location.service';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss']
})
export class LocationModalComponent implements OnInit {

  @Input() vehicule !: Vehicule;

  locataires : Locataire[] = [];

  locationForm : FormGroup = this.fb.group({
    dateDebut : [""],
    dateFin : [""],
    prixTotal : 0,
    vehicule : this.fb.group({
      id : 0
    }),
    locataire : this.fb.group({
      id : 0
    })
  })

  constructor(
    public activeModal: NgbActiveModal,
    private vehiculeService : VehiculeService,
    private locataireService : LocataireService,
    private locationService : LocationService,
    private fb : FormBuilder
    ) {}

  ngOnInit(): void {
    this.initLocataires();
    
    this.locationForm.get("dateDebut")!.valueChanges.subscribe(date => {
      let diffInDays = Math.abs((new Date(this.locationForm.value.dateFin).getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
      if(this.locationForm.value.dateFin != "") {
        this.locationForm.patchValue({prixTotal : diffInDays*this.vehicule.prix});
      }
      
    });
    this.locationForm.get("dateFin")!.valueChanges.subscribe(date => {
      let diffInDays = Math.abs((new Date(date).getTime() - new Date(this.locationForm.value.dateDebut).getTime()) / (1000 * 60 * 60 * 24));
      if(this.locationForm.value.dateDebut != "") {
        this.locationForm.patchValue({prixTotal : diffInDays*this.vehicule.prix});
      }
    });
  }

  initLocataires() {
    this.locataireService.findAll().subscribe({
      next: (data) => {
        this.locataires = data;
      }
    })
  }

  louer() {
    this.locationForm.patchValue({vehicule : { id : this.vehicule.id }});
    this.locationService.create(this.locationForm.value).subscribe({
      next: () => {
        this.activeModal.close();
      }
    })
    
  }

  close() {
    this.activeModal.close();
  }

  get prixTotal() {
    return this.locationForm.value.prixTotal;
  }

}
