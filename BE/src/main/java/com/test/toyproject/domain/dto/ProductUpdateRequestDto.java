package com.test.toyproject.domain.dto;

import com.test.toyproject.domain.item.Category;

public class ProductUpdateRequestDto {

    private String productName; // 상품명
    private int price; // 가격
    private String productContent; // 상품설명
    private int stock; // 재고
    private Category category; // 카테고리 [디지털, 가구, 의류, 가전, 도서, 스포츠, 취미, 기타]
}
