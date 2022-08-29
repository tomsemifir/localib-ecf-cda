package fr.semifir.localib.services;

import java.util.List;
import java.util.Optional;

public interface GenericService<T> {

    public Iterable<T> findAll();
    public T findById(Long id);
    public T create(T entity);
    public T update(Long id, T entity);
    public void delete(Long id);

}
