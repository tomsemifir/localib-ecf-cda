package fr.semifir.localib.services;

import fr.semifir.localib.models.Location;

import java.util.List;

public interface LocationService {

    public Iterable<Location> findAll();
    public Location findByNumero(Long numero);
    public Location create(Location entity);
    public Location update(Long numero, Location entity);
    public void delete(Long id);
}
