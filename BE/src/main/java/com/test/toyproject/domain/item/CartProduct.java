package com.test.toyproject.domain.item;

import com.test.toyproject.product.domain.Product;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class CartProduct {

    @Id @GeneratedValue
    @Column(name = "cart_product_no")
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_no")
    private Product product; // 상품

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_no")
    private Cart cart; // 장바구니

    private int count; // 수량
}
