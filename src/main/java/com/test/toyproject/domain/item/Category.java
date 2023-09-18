package com.test.toyproject.domain.item;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Category {

    @Id
    @GeneratedValue
    private Long categoryNo;

    private String categoryName;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="product_no")
    private Product product;
}
