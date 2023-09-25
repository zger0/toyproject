package com.test.toyproject.domain.repository.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepositroy extends JpaRepository<Product, Long> {

}
