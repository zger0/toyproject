import React from 'react';

export function InsertPage() {
  const [formData, setFormData] = React.useState({
    memberId: '',
    memberPwd: '',
    confirmPassword: '',
    memberName: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    fetch('http://localhost:8080/api/members', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  type="text"
                  name="memberId"
                  value={formData.memberId}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  name="memberPwd"
                  value={formData.memberPwd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input
                  type="text"
                  name="memberName"
                  value={formData.memberName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">가입하기</button>
      </form>
    </>
  );
}