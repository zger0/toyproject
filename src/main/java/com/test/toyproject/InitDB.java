package com.test.toyproject;

import com.test.toyproject.domain.item.Category;
import com.test.toyproject.domain.item.Product;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
public class InitDB {

    private EntityManager em;

    @Transactional
    public void test() {
        Product product = Product.builder()
                .productName("상품명")
                .price(10000)
                .productContent("상품설명")
                .stock(100)
                .category(Category.디지털)
                .build();
        em.persist(product);

        System.out.println("product.getProductName() = " + product.getProductName());
    }
}
