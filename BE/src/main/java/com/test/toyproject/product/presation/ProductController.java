package com.test.toyproject.product.presation;

import com.test.toyproject.product.service.ProductService;
import com.test.toyproject.product.dto.request.ProductSaveRequestDto;
import com.test.toyproject.product.domain.Product;
import com.test.toyproject.golbal.exception.Constants;
import com.test.toyproject.golbal.exception.CustomException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<Product> findAllProductsV1() {
        return productService.findAllProducts();
    }

    @GetMapping("/{productName}")
    public List<Product> findProductByProductNameV1(@PathVariable String productName) {
        return productService.findByProductName(productName);
    }

    @PostMapping
    public Product saveProductV1(@Valid @RequestBody ProductSaveRequestDto productDto) {
        return productService.saveProduct(productDto);
    }

    @PutMapping("/{productId}")
    public Long updateProductByIdV1(@PathVariable Long productId, @RequestBody ProductSaveRequestDto productDto) {
        productService.updateProduct(productId, productDto);
        return productId;
    }

    @DeleteMapping("/{productId}")
    public Long deleteProductByIdV1(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        return productId;
    }
    @PostMapping("/exception")
    public void exceptionTest() throws CustomException {
        throw new CustomException(Constants.ExceptionClass.PRODUCT, HttpStatus.BAD_REQUEST, "테스트 에러");
    }
}
