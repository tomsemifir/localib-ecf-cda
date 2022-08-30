import { Locataire } from "./locataire";
import { Vehicule } from "./vehicule";

export class Location {

    constructor(
        public id : string,
        public dateDebut : Date,
        public dateFin : Date,
        public prixTotal : number,
        public locataire : Locataire,
        public vehicule : Vehicule
    ) {

    }
}