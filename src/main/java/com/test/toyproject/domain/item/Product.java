package com.test.toyproject.domain.item;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product {
    @Id
    @GeneratedValue
    private Long productNo;
    private String productName;
    private String count;
    private String productPrice;
    private String viewCount;
    private String Content;
    @OneToMany(mappedBy = "product")
    private List<Category> category = new ArrayList<Category>();
}
