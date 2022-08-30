import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicule } from 'src/app/models/vehicule';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss']
})
export class LocationModalComponent implements OnInit {

  @Input() vehicule !: Vehicule;

  constructor(
    public activeModal: NgbActiveModal
    ) {}

  ngOnInit(): void {
  }

}
