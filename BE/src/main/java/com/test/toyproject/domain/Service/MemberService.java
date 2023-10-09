package com.test.toyproject.domain.Service;

import com.test.toyproject.domain.item.Member;
import com.test.toyproject.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    // 전체 회원조회
    public List<Member> findByMembers(){
        return memberRepository.findAll();
    }

    // 회원 한명 조회
    public Member findByMember(Long id){
        return memberRepository.findById(id).get();
    }

    // 회원 저장
    public Member saveMember(Member member){
        System.out.println("member = " + member);
        System.out.println("member.getMemberId() = " + member.getMemberId());
        System.out.println("member.getMemberName() = " + member.getMemberName());
        return memberRepository.save(member);
    }

    // 회원 수정
    public void updateMember(Long id, Member member){
        Member m = memberRepository.findById(id).get();
        m.updateMember(member);
    }

    // 회원 삭제
    public void deleteMember(Long id){
        Member m = memberRepository.findById(id).get();
        memberRepository.delete(m);
    }

}
