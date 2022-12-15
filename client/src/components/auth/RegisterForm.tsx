import React from "react";
import { Link } from "react-router-dom";
import { AuthFormBlock, Footer, StyledInput, SummitBtn } from "./AuthStyle";

const RegisterForm = () => {
  return (
    <AuthFormBlock>
      <h3>회원가입</h3>
      <form>
        <div>
          <label htmlFor="idInput">email</label>
          <StyledInput
            id="idInput"
            autoComplete="on"
            name="userEmail"
            placeholder="이메일"
          />
          <SummitBtn>이메일 인증</SummitBtn>
        </div>
        <p>{}</p>
        <div>
          <label htmlFor="idInput">email</label>
          <StyledInput
            id="idInput"
            autoComplete="off"
            name="authNumbers"
            placeholder="인증번호"
          />
          <SummitBtn>인증번호 확인</SummitBtn>
        </div>
        <p></p>
        <div>
          <label htmlFor="닉네임">password</label>
          <StyledInput
            id="passwordInput"
            autoComplete="off"
            name="Password"
            placeholder="비밀번호"
            type="password"
          />
          <label htmlFor="passwordInput">password</label>
          <StyledInput
            id="passwordInput"
            autoComplete="off"
            name="PasswordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
          <SummitBtn className="submit">회원가입</SummitBtn>
        </div>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default RegisterForm;
