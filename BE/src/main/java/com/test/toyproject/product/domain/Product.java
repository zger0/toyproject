package com.test.toyproject.product.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product {

    @Id @GeneratedValue
    @Column(name = "product_no")
    private Long no;

    @NotNull
    private String productName; // 상품명

    @NotNull
    private int price; // 가격

    @NotNull
    private String productContent; // 상품설명

    @NotNull
    @Min(value = 0)
    @Max(value = 9999)
    private int stock; // 재고

    @Enumerated(EnumType.STRING)
    private Category category; // 카테고리 [디지털, 가구, 의류, 가전, 도서, 스포츠, 취미, 기타]

    public void updateProduct(Product product){
        this.productName = product.getProductName();
        this.price = product.getPrice();
        this.productContent = product.getProductContent();
        this.stock = product.getStock();
        this.category = product.getCategory();
    }
    @Builder
    public Product(String productName, int price, String productContent, int stock, Category category) {
        this.productName = productName;
        this.price = price;
        this.productContent = productContent;
        this.stock = stock;
        this.category = category;
    }


}
