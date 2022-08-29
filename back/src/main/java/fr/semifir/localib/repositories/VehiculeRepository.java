package fr.semifir.localib.repositories;

import fr.semifir.localib.models.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiculeRepository extends JpaRepository<Vehicule, Long> {
}
