package com.test.toyproject.api;

import com.test.toyproject.domain.Service.ProductService;
import com.test.toyproject.domain.dto.ProductSaveRequestDto;
import com.test.toyproject.domain.item.Product;
import com.test.toyproject.exception.Constants;
import com.test.toyproject.exception.CustomException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class ProductApiController {

    private final ProductService productService;

    @GetMapping("products")
    public List<Product> findAllProductsV1() {
        return productService.findAllProducts();
    }

    @GetMapping("products/{ProductId}")
    public Product findProductByIdV1(@PathVariable Long ProductId) {
        return productService.findByProduct(ProductId);
    }

    @PostMapping("products")
    public Product saveProductV1(@Valid @RequestBody ProductSaveRequestDto productDto) {
        return productService.saveProduct(productDto);
    }

    @PostMapping("products/{productId}")
    public Long updateProductByIdV1(@PathVariable Long productId, @RequestBody ProductSaveRequestDto productDto) {
        productService.updateProduct(productId, productDto);
        return productId;
    }

    @DeleteMapping("products/{productId}")
    public Long deleteProductByIdV1(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        return productId;
    }
    @PostMapping("product/exception")
    public void exceptionTest() throws CustomException {
        throw new CustomException(Constants.ExceptionClass.PRODUCT, HttpStatus.BAD_REQUEST, "테스트 에러");
    }
}
