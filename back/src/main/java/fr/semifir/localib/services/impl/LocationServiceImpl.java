package fr.semifir.localib.services.impl;

import fr.semifir.localib.models.Location;
import fr.semifir.localib.repositories.LocationRepository;
import fr.semifir.localib.services.GenericService;

import java.util.List;
import java.util.Optional;

public class LocationServiceImpl implements GenericService<Location> {

    private LocationRepository repository;

    public LocationServiceImpl(LocationRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Location> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Location findById(Long id) {
        Optional<Location> location = this.repository.findById(id);
        if(location.isEmpty()) {
            throw new NullPointerException("La location est introuvable...");
        }
        return location.get();
    }

    @Override
    public Location create(Location entity) {
        return this.repository.save(entity);
    }

    @Override
    public Location update(Long id, Location entity) {
        entity.setId(id);
        return this.repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
