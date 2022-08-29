package fr.semifir.localib.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import java.io.Serializable;

@Embeddable
@Data
public class LocationKey implements Serializable {

    @Column(name = "locataire_id")
    private Long locataireId;
    @Column(name = "vehicule_id")
    private Long vehiculeId;
}
