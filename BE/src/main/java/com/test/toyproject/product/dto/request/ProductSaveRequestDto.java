package com.test.toyproject.product.dto.request;

import com.test.toyproject.product.domain.Category;
import com.test.toyproject.product.domain.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ProductSaveRequestDto {

    private String productName; // 상품명
    private int price; // 가격
    private String productContent; // 상품설명
    private int stock; // 재고
    private Category category; // 카테고리 [디지털, 가구, 의류, 가전, 도서, 스포츠, 취미, 기타]

    @Builder
    public ProductSaveRequestDto(String productName, int price, String productContent, int stock, Category category) {
        this.productName = productName;
        this.price = price;
        this.productContent = productContent;
        this.stock = stock;
        this.category = category;
    }

    public Product toEntity(){
        return Product.builder()
                .productName(productName)
                .price(price)
                .productContent(productContent)
                .stock(stock)
                .category(category)
                .build();
    }
}
