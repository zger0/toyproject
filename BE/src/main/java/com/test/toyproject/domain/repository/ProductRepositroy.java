package com.test.toyproject.domain.repository;

import com.test.toyproject.domain.item.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepositroy extends JpaRepository<Product, Long> {

}
