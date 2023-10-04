package com.test.toyproject.product.service;

import com.test.toyproject.product.dto.request.ProductSaveRequestDto;
import com.test.toyproject.product.domain.Product;
import com.test.toyproject.product.domain.repository.ProductRepositroy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepositroy productRepositroy;


    public Product saveProduct (ProductSaveRequestDto requestDto){
        return productRepositroy.save(requestDto.toEntity());
    }

    public List<Product> findByProductName(String productName){
        return productRepositroy.findByProductName(productName);
    }

    public List<Product> findAllProducts(){
        return productRepositroy.findAll();
    }

    public Long updateProduct(Long id, ProductSaveRequestDto requestDto){
        Product product = productRepositroy.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 상품이 없습니다.")
        );
        product.updateProduct(requestDto.toEntity());
        return id;
    }

    public void deleteProduct(Long id){
        Product product = productRepositroy.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 상품이 없습니다.")
        );
        productRepositroy.delete(product);
    }

}
