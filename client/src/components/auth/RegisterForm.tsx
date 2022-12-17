import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";
import {
  AuthFormBlock,
  Footer,
  StyledInput,
  Button,
  Select,
  ResultText,
  TextArea,
} from "./AuthStyle";

const RegisterForm = () => {
  const domain = "http://localhost:5000";

  const [userState, setUserState] = useImmer({
    email: "",
    nickName: "",
    password: "",
    gender: "",
    age: "",
    introduce: "",
  });
  const [checkEmailMessage, setCheckEmailMessage] = useImmer("");
  const [authNumber, setAuthNumber] = useImmer("");
  const [checkAuthnumber, setCheckAuthnumber] = useImmer(false);
  const [confirmPassword, setConfirmPassword] = useImmer("");

  useEffect(() => {
    if (userState.email !== "") {
      console.log("2");
    }
  }, [userState]);

  useEffect(() => {
    console.log(userState);
  }, [userState, userState.gender]);

  const AgeOption = [
    { value: "default", name: "선택" },
    { value: "10대", name: "10대" },
    { value: "20대", name: "20대" },
    { value: "30대", name: "30대" },
    { value: "40대", name: "40대" },
    { value: "50대", name: "50대" },
    { value: "60대 이상", name: "60대 이상" },
  ];

  const handleReqAuthNumber = async () => {
    // axios 요청 - email로 인증번호 보내기, 409 번이면 이메일 중복 텍스트, 201이면 성공 텍스트
    const res = await axios.post(`${domain}/api/main/auth/email`, {
      email: userState.email,
    });
    console.log(res);
    if (checkEmailMessage === "") {
      setCheckEmailMessage("이메일 주소를 입력해주세요");
    } else if (res.status === 201) {
      setCheckEmailMessage("사용가능한 이메일 주소입니다");
    } else {
      setCheckEmailMessage("이미 존재하는 이메일 주소입니다");
    }
  };

  const handleCheckAuthnumber = () => {
    // aiox 요청 - 200번 성공이면 통과 400이면 인증실패
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.email = e.target.value;
    });
  };

  const onChangeAuthNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthNumber(e.target.value);
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.nickName = e.target.value;
    });
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.password = e.target.value;
    });
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.gender = e.target.value;
    });
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserState((draft) => {
      draft.age = e.target.value;
    });
  };

  const onChangeIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserState((draft) => {
      draft.introduce = e.target.value;
    });
  };

  return (
    <AuthFormBlock>
      <form>
        <label htmlFor="emailInput">email*</label>
        <StyledInput
          id="emailInput"
          autoComplete="on"
          name="userEmail"
          placeholder="이메일 주소를 입력해주세요"
          onChange={onChangeEmail}
          value={userState.email}
        />
        <ResultText>{checkEmailMessage}</ResultText>
        <Button type="button" onClick={handleReqAuthNumber}>
          인증번호 요청
        </Button>

        <label htmlFor="authNumberInput">인증번호*</label>
        <StyledInput
          id="authNumberInput"
          autoComplete="off"
          name="authNumber"
          placeholder="인증번호를 입력해주세요"
          onChange={onChangeAuthNumber}
          value={authNumber}
        />
        <ResultText>{"인증번호가 일치하지 않습니다"}</ResultText>
        <Button type="button" onClick={handleCheckAuthnumber}>
          인증번호 확인
        </Button>

        <label htmlFor="nicknameInput">닉네임*</label>
        <StyledInput
          id="nicknameInput"
          autoComplete="on"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          onChange={onChangeNickName}
          value={userState.nickName}
        />
        <ResultText>{"8글자 이하, 특수문자 제외"}</ResultText>

        <label htmlFor="passwordInput">비밀번호*</label>
        <StyledInput
          id="passwordInput"
          autoComplete="off"
          name="Password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={onChangePassword}
          value={userState.password}
        />
        <ResultText>
          {"8자 이상, 20자이하, 영어,숫자,특수문자 사용 "}
        </ResultText>

        <label htmlFor="passwordConfirmInput">비밀번호 확인*</label>
        <StyledInput
          id="passwordConfirmInput"
          autoComplete="off"
          name="PasswordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          onChange={onChangeConfirmPassword}
          value={confirmPassword}
        />
        <ResultText>{"비밀번호가 일치하지 않습니다"}</ResultText>

        <label htmlFor="passwordInput">성별*</label>
        <label className="gender">
          <input
            type="radio"
            name="gender"
            value="남성"
            checked={userState.gender === "남성"}
            onChange={onChangeGender}
          />
          남성
        </label>
        <label className="gender">
          <input
            type="radio"
            name="gender"
            value="여성"
            checked={userState.gender === "여성"}
            onChange={onChangeGender}
          />
          여성
        </label>

        <label htmlFor="ageSelect">나이*</label>
        <Select
          id="ageSelect"
          className="ageSelect"
          defaultValue="default"
          value={userState.age}
          onChange={onChangeAge}
        >
          {AgeOption.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.value === "default" ? true : false}
            >
              {option.name}
            </option>
          ))}
        </Select>
        <label htmlFor="introduceText">자기소개*</label>
        <TextArea
          name="introduce"
          id="introduceText"
          rows={8}
          placeholder="100자 이내로 소개해주세요"
          onChange={onChangeIntroduce}
        ></TextArea>
        <p className="introP">
          SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)
        </p>
        <Button className="formSubmit">회원가입</Button>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default RegisterForm;
