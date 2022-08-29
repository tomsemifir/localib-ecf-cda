package fr.semifir.localib.services.impl;

import fr.semifir.localib.models.Locataire;
import fr.semifir.localib.repositories.LocataireRepository;
import fr.semifir.localib.services.GenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class LocataireServiceImpl implements GenericService<Locataire> {

    private LocataireRepository repository;

    public LocataireServiceImpl(LocataireRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Locataire> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Locataire findById(Long id) {
        Optional<Locataire> locataire = this.repository.findById(id);
        if(locataire.isEmpty()) {
            throw new NullPointerException("Locataire introuvable...");
        }
        return locataire.get();
    }

    @Override
    public Locataire create(Locataire entity) {
        return this.repository.save(entity);
    }

    @Override
    public Locataire update(Long id, Locataire entity) {
        entity.setId(id);
        return this.repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
