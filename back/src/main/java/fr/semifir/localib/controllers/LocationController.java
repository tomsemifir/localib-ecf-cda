package fr.semifir.localib.controllers;

import fr.semifir.localib.models.Locataire;
import fr.semifir.localib.models.Location;
import fr.semifir.localib.services.impl.LocationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("locations")
@CrossOrigin
public class LocationController {

    private LocationServiceImpl service;

    @Autowired
    public LocationController(LocationServiceImpl service) {
        this.service = service;
    }

    @GetMapping("")
    public List<Location> findAll() {
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Location findByNumero(@PathVariable Long id) {
        return this.service.findById(id);
    }

    @PostMapping("")
    public Location create(@RequestBody Location location) {
        return this.service.create(location);
    }

    @PatchMapping("{id}")
    public Location update(@PathVariable Long id, @RequestBody Location location) {
        return this.service.update(id, location);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }
}
