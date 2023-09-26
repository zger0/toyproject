package com.test.toyproject.domain.Service;

import com.test.toyproject.domain.item.Product;
import com.test.toyproject.domain.repository.ProductRepositroy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepositroy productRepositroy;

    public void updateProduct(Long id, String productName, int price, String productContent, int stock) {
        Product product = productRepositroy.findById(id).get();
        product.builder()
                .productName(productName)
                .price(price)
                .productContent(productContent)
                .stock(stock)
                .build();
    }
}
