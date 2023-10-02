package com.test.toyproject.domain.item;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class Cart {

    @Id @GeneratedValue
    @Column(name = "cart_no")
    private Long no;

    @OneToOne
    @JoinColumn(name = "member_no")
    private Member member; // 회원
}
