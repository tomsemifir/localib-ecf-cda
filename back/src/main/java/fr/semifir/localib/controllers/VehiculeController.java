package fr.semifir.localib.controllers;

import fr.semifir.localib.models.Vehicule;
import fr.semifir.localib.services.impl.VehiculeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("vehicules")
public class VehiculeController {

    private VehiculeServiceImpl service;

    @Autowired
    public VehiculeController(VehiculeServiceImpl service) {
        this.service = service;
    }

    @GetMapping("")
    public List<Vehicule> findAll() {
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Vehicule findById(@PathVariable Long id) {
        return this.service.findById(id);
    }

    @PostMapping("")
    public Vehicule create(@RequestBody Vehicule vehicule) {
        return this.service.create(vehicule);
    }

    @PatchMapping("{id}")
    public Vehicule update(@PathVariable Long id, @RequestBody Vehicule vehicule) {
        return this.service.update(id, vehicule);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }
}
