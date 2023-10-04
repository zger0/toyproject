package com.test.toyproject.product.domain.repository;

import com.test.toyproject.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepositroy extends JpaRepository<Product, Long> {

    List<Product> findByProductName(String productName);
}
