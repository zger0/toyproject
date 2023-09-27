package com.test.toyproject.api;

import com.test.toyproject.domain.Service.MemberService;
import com.test.toyproject.domain.dto.MemberDTO;
import com.test.toyproject.domain.item.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    @GetMapping("/api/members")
    public List<MemberDTO> findByMembers(){
        List<Member> findMembers = memberService.findByMembers();
        List<MemberDTO> collect = findMembers.stream()
                .map(m -> new MemberDTO(m.getMemberId(), m.getMemberName(), m.getEmail()
                                        , m.getAddres(), m.getPhone(), m.getCreateDate()))
                .collect(java.util.stream.Collectors.toList());
        return collect;
    }

    @GetMapping("/api/members/{id}")
    public MemberDTO findByMember(@PathVariable("id") Long id){
        Member member = memberService.findByMember(id);

        return new MemberDTO(member.getMemberId(), member.getMemberName(), member.getEmail()
                                        , member.getAddres(), member.getPhone(), member.getCreateDate());
    }

    @PostMapping("/api/members")
    public Long saveMember(@RequestBody Member member){
        Member m = memberService.saveMember(member);
        return m.getNo();
    }

    @PutMapping("/api/members/{id}")
    public MemberDTO updateMember(@PathVariable("id") Long id, @RequestBody Member member){
        memberService.updateMember(id, member);
        Member m = memberService.findByMember(id);
        return new MemberDTO(m.getMemberId(), m.getMemberName(), m.getEmail()
                                        , m.getAddres(), m.getPhone(), m.getCreateDate());
    }

    @DeleteMapping("/api/members/{id}")
    public Long deleteMember(@PathVariable("id") Long id){
        memberService.deleteMember(id);
        return id;
    }
}
