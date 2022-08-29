package fr.semifir.localib.config;

import fr.semifir.localib.repositories.LocataireRepository;
import fr.semifir.localib.repositories.LocationRepository;
import fr.semifir.localib.repositories.VehiculeRepository;
import fr.semifir.localib.services.impl.LocataireServiceImpl;
import fr.semifir.localib.services.impl.LocationServiceImpl;
import fr.semifir.localib.services.impl.VehiculeServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceConfig {

    @Bean
    public VehiculeServiceImpl vehiculeService(VehiculeRepository repository) {
        return new VehiculeServiceImpl(repository);
    }

    @Bean
    public LocataireServiceImpl locataireService(LocataireRepository repository) {
        return new LocataireServiceImpl(repository);
    }

    @Bean
    public LocationServiceImpl locationService(LocationRepository repository) {
        return new LocationServiceImpl(repository);
    }
}
