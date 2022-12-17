import React from "react";
import { Link } from "react-router-dom";
import { AuthFormBlock, Footer, StyledInput, Button } from "./AuthStyle";
import { useImmer } from "use-immer";

const LoginForm = () => {
  const [userState, setUserState] = useImmer({
    email: "",
    password: "",
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.email = e.target.value;
    });
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.password = e.target.value;
    });
  };

  return (
    <AuthFormBlock>
      <form>
        <div>
          <label htmlFor="idInput">email</label>
          <StyledInput
            id="idInput"
            autoComplete="on"
            name="userEmail"
            placeholder="이메일"
            onChange={onChangeEmail}
            value={userState.email}
          />
        </div>

        <div>
          <label htmlFor="passwordInput">password</label>
          <StyledInput
            id="passwordInput"
            autoComplete="off"
            name="Password"
            placeholder="비밀번호"
            type="password"
            onChange={onChangePassword}
            value={userState.password}
          />

          <Button className="formSubmit">로그인</Button>
        </div>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default LoginForm;
