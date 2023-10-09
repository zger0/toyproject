package com.test.toyproject.domain.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MemberDTO {

    private Long id;
    private String memberId;
    private String memberPwd;
    private String memberName;
    private String email;
    private String addres;
    private String phone;
    private LocalDateTime createDate;

    public MemberDTO(Long id, String memberId, String memberName, String email, String addres, String phone, LocalDateTime createDate) {
        this.id = id;
        this.memberId = memberId;
        this.memberName = memberName;
        this.email = email;
        this.addres = addres;
        this.phone = phone;
        this.createDate = createDate;
    }
}
