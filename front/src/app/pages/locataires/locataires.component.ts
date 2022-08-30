import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Locataire } from 'src/app/models/locataire';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-locataires',
  templateUrl: './locataires.component.html',
  styleUrls: ['./locataires.component.scss']
})
export class LocatairesComponent implements OnInit {

  locataires : Locataire[] = [];
  showForm = false;
  locataireForm : FormGroup = this.fb.group({
    nom : "",
    prenom : "",
    email : "",
    password : ""
  })

  constructor(
    private service : LocataireService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initLocataires();
  }

  switchShowForm() {
    this.showForm = !this.showForm;
  }

  initLocataires() {
    this.service.findAll().subscribe({
      next : (data) => {
        this.locataires = data;
      }
    })
  }

  addLocataire() {
    this.service.create(this.locataireForm.value).subscribe({
      next : () => {
        this.locataireForm.reset();
        this.initLocataires();
      }
    })
  }

  deleteLocataire(id : number) {
    this.service.delete(id).subscribe({
      next : () => {
        this.initLocataires();
      }
    })
  }

}
