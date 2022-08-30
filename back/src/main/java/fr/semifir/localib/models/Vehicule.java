package fr.semifir.localib.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status")
    private String status;
    @Column(name = "type")
    private String type;
    @Column(name = "marque")
    private String marque;
    @Column(name = "modele")
    private String modele;
    @Column(name = "immatriculation")
    private String immatriculation;
    @Column(name = "prix")
    private double prix;
    @Column(name = "etat")
    private String etat;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "vehicule_id")
    private Set<Locataire> locations;
}
