package fr.semifir.localib.services.impl;

import fr.semifir.localib.models.Vehicule;
import fr.semifir.localib.repositories.VehiculeRepository;
import fr.semifir.localib.services.GenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class VehiculeServiceImpl implements GenericService<Vehicule> {

    private VehiculeRepository repository;

    public VehiculeServiceImpl(VehiculeRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Vehicule> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Vehicule findById(Long id) {
        Optional<Vehicule> vehicule = this.repository.findById(id);
        if(vehicule.isEmpty()) {
            throw new NullPointerException("Vehicule introuvable...");
        }
        return vehicule.get();
    }

    @Override
    public Vehicule create(Vehicule entity) {
        return this.repository.save(entity);
    }

    @Override
    public Vehicule update(Long id, Vehicule entity) {
        entity.setId(id);
        return this.repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
