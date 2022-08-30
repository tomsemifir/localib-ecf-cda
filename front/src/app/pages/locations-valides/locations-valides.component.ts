import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations-valides',
  templateUrl: './locations-valides.component.html',
  styleUrls: ['./locations-valides.component.scss']
})
export class LocationsValidesComponent implements OnInit {

  locations : Location[] = [];
  
  constructor(
    private service : LocationService
  ) { }

  ngOnInit(): void {
    this.initLocs();
  }

  initLocs() {
    this.service.findAll().subscribe({
      next: (data) => {
        this.locations = data;
      }
    })
  }

}
