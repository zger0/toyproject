import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export function ListPage() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
      // Fetch data from the API
      fetch('http://localhost:8080/api/members')
        .then(response => response.json())
        .then(data => setMembers(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
            <h1>회원목록</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {members.map(member => (
                    <tr key={member.memberId}>
                    <Link to={`/member/${member.id}`}>{member.memberId}</Link>
                    <td>{member.memberName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}