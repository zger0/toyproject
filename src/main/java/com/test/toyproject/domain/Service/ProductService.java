package com.test.toyproject.domain.Service;

import com.test.toyproject.domain.dto.ProductSaveRequestDto;
import com.test.toyproject.domain.item.Product;
import com.test.toyproject.domain.repository.ProductRepositroy;
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

    public Product findByProduct(Long id){
        return productRepositroy.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 상품이 없습니다.")
        );
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
