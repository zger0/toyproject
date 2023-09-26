package com.test.toyproject.api;

import com.test.toyproject.domain.Service.ProductService;
import com.test.toyproject.domain.item.Product;
import com.test.toyproject.domain.repository.ProductRepositroy;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class ProductApiController {

    private final ProductRepositroy productRepositroy;
    private final ProductService productService;

    @GetMapping("products")
    public List<Product> findAllProductsV1() {
        return productRepositroy.findAll();
    }

    @GetMapping("products/{ProductId}")
    public Product findProductByIdV1(@PathVariable Long ProductId) {
        return productRepositroy.findById(ProductId).orElseThrow(() -> new IllegalArgumentException("해당 상품이 없습니다. id=" + ProductId));
    }

    @PostMapping("products")
    public Long saveProductV1(@RequestBody Product product) {
        productRepositroy.save(product);
        return product.getNo();
    }

    @PostMapping("products/{productId}")
    public Long updateProductByIdV1(@PathVariable Long productId, @RequestBody Product product) {
        productService.updateProduct(productId, product.getProductName(), product.getPrice(), product.getProductContent(), product.getStock());
        return productId;
    }

    @DeleteMapping("products/{productId}")
    public Long deleteProductByIdV1(@PathVariable Long productId) {
        productRepositroy.deleteById(productId);
        return productId;
    }
}
