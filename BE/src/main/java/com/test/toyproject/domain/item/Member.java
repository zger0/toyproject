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
    private Long id;

    private String memberId; // 아이디

    private String memberPwd; // 비밀번호

    private String memberName; // 이름

    private String email; // 이메일

    private String addres; // 주소

    private String phone; // 핸드폰

    private LocalDateTime createDate; //가입일

    public void updateMember(Member member){
        this.memberName = member.getMemberName();
        this.email = member.getEmail();
        this.addres = member.getAddres();
        this.phone = member.getPhone();
    }


}
