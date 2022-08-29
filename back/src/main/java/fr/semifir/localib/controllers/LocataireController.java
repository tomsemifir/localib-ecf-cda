package fr.semifir.localib.controllers;

import fr.semifir.localib.models.Locataire;
import fr.semifir.localib.services.impl.LocataireServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("locataires")
public class LocataireController {

    private LocataireServiceImpl service;

    @Autowired
    public LocataireController(LocataireServiceImpl service) {
        this.service = service;
    }

    @GetMapping("")
    public List<Locataire> findAll() {
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Locataire findById(@PathVariable Long id) {
        return this.service.findById(id);
    }

    @PostMapping("")
    public Locataire create(@RequestBody Locataire locataire) {
        return this.service.create(locataire);
    }

    @PatchMapping("{id}")
    public Locataire update(@PathVariable Long id, @RequestBody Locataire locataire) {
        return this.service.update(id, locataire);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }
}
