package com.test.toyproject.domain.item;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class OrderProduct {

    @Id @GeneratedValue
    @Column(name = "order_product_no")
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_no")
    private Order order; // 주문

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_no")
    private Product product; // 주문상품
}
