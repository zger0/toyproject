package com.test.toyproject.api;

import com.test.toyproject.domain.item.Product;
import com.test.toyproject.domain.repository.product.ProductRepositroy;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProductApiController {

    private final ProductRepositroy productRepositroy;

    @GetMapping("/api/v1/products")
    public List<Product> findAllProductsV1() {
        return productRepositroy.findAll();
    }
}
