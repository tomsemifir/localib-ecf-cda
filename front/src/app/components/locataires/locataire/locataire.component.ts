import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Locataire } from 'src/app/models/locataire';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.scss']
})
export class LocataireComponent implements OnInit {

  @Input() locataire !: Locataire;
  @Output() deleteEvent = new EventEmitter<number>();
  editMode = false;

  locataireForm : FormGroup = this.fb.group({
    id : "",
    nom : "",
    prenom : "",
    email : "",
    password: ""
  })

  constructor(
    private fb : FormBuilder,
    private service: LocataireService
    ) { }

  ngOnInit(): void {
    this.locataireForm.patchValue(this.locataire)
  }

  delete() {
    this.deleteEvent.emit(this.locataire.id)
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  editLocataire() {
    this.service.update(this.locataireForm.value).subscribe({
      next: (data) => {
        this.locataire = data;
        this.switchEditMode();
      }
    })
  }

}
