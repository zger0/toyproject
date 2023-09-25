package com.test.toyproject.domain.item;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_no")
    private Long no;

    private String memberId; // 아이디

    private String memberPwd; // 비밀번호

    private String email; // 이메일

    private String addres; // 주소

    private String phone; // 핸드폰

    private LocalDateTime createDate; //가입일


}
