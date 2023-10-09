import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export function DetailPage() {

    const [memberDetails, setMemberDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/members/${id}`)
            .then(response => response.json())
            .then(data => setMemberDetails(data))
            .catch(error => console.error('Error fetching member details:', error));
    }, [id]);

    return (
        <>
            <h1>회원 상세조회</h1>
            {memberDetails ? (
                <div>
                    <p>아이디: {memberDetails.memberId}</p>
                    <p>이름: {memberDetails.memberName}</p>
                    <p>이메일: {memberDetails.email}</p>
                    <p>주소: {memberDetails.address}</p>
                    <p>핸드폰: {memberDetails.phone}</p>
                    <p>가입일: {memberDetails.createDate}</p>
                </div>
            ) : (
                <p>Loading member details...</p>
            )}
        </>
    );
}