package com.test.toyproject.product.dto.response;

import com.test.toyproject.product.domain.Category;
import lombok.*;

@Getter
public class ProductResponseDto {

        private Long no;
        private String productName; // 상품명
        private int price; // 가격
        private String productContent; // 상품설명
        private int stock; // 재고
        private Category category; // 카테고리 [디지털, 가구, 의류, 가전, 도서, 스포츠, 취미, 기타]

        //repository 를 통해 조회한 entity 를 dto 로 변환 용도
        public ProductResponseDto(Long no, String productName, int price, String productContent, int stock, Category category) {
                this.no = no;
                this.productName = productName;
                this.price = price;
                this.productContent = productContent;
                this.stock = stock;
                this.category = category;
        }
}
