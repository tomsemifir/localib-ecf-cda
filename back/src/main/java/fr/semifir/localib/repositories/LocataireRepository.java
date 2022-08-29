package fr.semifir.localib.repositories;

import fr.semifir.localib.models.Locataire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocataireRepository extends JpaRepository<Locataire, Long> {
}
