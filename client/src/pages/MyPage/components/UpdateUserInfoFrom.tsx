import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import {
  AuthFormBlock,
  Button,
  ResultText,
  Select,
  StyledInput,
  TextArea,
} from "../../../components/auth/AuthStyle";
import {
  checkConfirmPassword,
  checkIntroduce,
  checkPassword,
} from "../../../components/auth/validation";
import { useAppSelector } from "../../../store/hooks";
import { useAppDispatch } from "./../../../store/hooks";

const UpdateUserInfoFrom = () => {
  const domain = "http://localhost:5000";
  const navigate = useNavigate();

  const AgeOption = [
    { value: "default", name: "선택" },
    { value: "10대", name: "10대" },
    { value: "20대", name: "20대" },
    { value: "30대", name: "30대" },
    { value: "40대", name: "40대" },
    { value: "50대", name: "50대" },
    { value: "60대 이상", name: "60대 이상" },
  ];

  // modal slice 사용, 모달 창 열기 닫기
  // const modal = useAppSelector((state) => state.modal);
  // const dispatch = useAppDispatch();

  const [userState, setUserState] = useImmer({
    email: "",
    nickName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    introduce: "",
    profileImg: "",
    fullfilled: false,
  });

  const [validText, setValidText] = useImmer({
    password: "8~20자, 영문, 숫자, 특수문자 모두 사용",
    confirmPassword: "비밀번호를 다시 한 번 입력해주세요",
    introduce:
      "SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)",
  });

  //첫 로딩 시, 기존 user정보 요청
  useEffect(() => {
    const loadUserInfo = async () => {
      // 응답 api url 추후 변경 예정
      try {
        const res = await axios.get(`${domain}/api/main/auth/userInfo`);
        // 응답 코드 추후 변경 예정
        if (res.status === 200) {
          return res.data;
          // 비로그인으로 접근 시, 실패 코드
        } else if (res.data === 401) {
          alert("로그인 후 사용가능한 페이지입니다");
          navigate("/login");
        } else {
          throw new Error(
            "/api/main/auth/userInfo 의 응답 status 코드가 201, 409 에 해당하지 않습니다",
          );
        }
      } catch (error) {
        alert("유저 정보 가져오기가 실패했습니다");
        console.error(error);
      }
    };

    // api 완성 시, 주석 해제 예정
    const loadData = loadUserInfo();
    setUserState((draft) => {
      // draft.email = loadData.email;
      // draft.nickName = loadData.nickName;
      // draft.gender = loadData.gender;
      // draft.age = loadData.age;
      // draft.introduce = loadData.introduce;
    });
  }, [navigate, setUserState]);

  // userState.password 변경 시에도 userState.confirmPassword 가 변해야 하므로 useEffect 사용
  useEffect(() => {
    setValidText((draft) => {
      draft.confirmPassword = checkConfirmPassword(
        userState.confirmPassword,
        userState.password,
        validText.password,
      );
    });
  }, [
    setValidText,
    userState.confirmPassword,
    userState.password,
    validText.password,
  ]);

  useEffect(() => {
    if (
      validText.confirmPassword === "비밀번호 확인이 완료되었습니다" &&
      validText.introduce ===
        "SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)"
    ) {
      userState.fullfilled = true;
    }
  }, [userState, validText.confirmPassword, validText.introduce]);

  useEffect(() => {
    const userData = {
      password: userState.password,
      age: userState.age,
      introduce: userState.introduce,
      profileImg: userState.profileImg,
    };
    const callUpdateAPi = async () => {
      if (userState.fullfilled === true) {
        const res = await axios.post(
          `${domain}/api/main/auth/updateUserInfo`,
          userData,
        );
        // 회원 정보 수정 성공 코드 추후 수정 필요
        if (res.status === 201) {
          // 회원 정보 수정 시 실행할 코드 내용
          // 회원 정보 수정 실패 코드 추후 수정 필요
        } else if (res.status === 403) {
          // 회원 정보 수정 실패 시 실행할 코드 내용
        } else {
          // 그 외 예상치 못한 코드 수신 시, 콘솔로 에러 보이기. 추후 코드 내용 수정
          console.error(
            "/api/main/auth/updateUserInfo 의 응답 status 코드가 200, 400 에 해당하지 않습니다",
          );
          alert("회원 정보 수정에 실패하였습니다. 인터넷 연결을 확인해주세요");
        }
      } else {
        alert(
          "새 비밀번호와 자기소개를 입력하지 않으시면 회원정보 수정이 불가합니다",
        );
      }
    };
    callUpdateAPi();
  }, [
    userState.age,
    userState.fullfilled,
    userState.introduce,
    userState.password,
    userState.profileImg,
  ]);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.password = e.target.value;
    });
    setValidText((draft) => {
      draft.password = checkPassword(e.target.value);
    });
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.confirmPassword = e.target.value;
    });
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
    const checkResult = checkIntroduce(e.target.value);
    setUserState((draft) => {
      draft.introduce = e.target.value;
      if (
        checkResult ===
        "SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)"
      ) {
        draft.introduce = e.target.value;
      }
    });
    setValidText((draft) => {
      draft.introduce = checkResult;
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // slice로 모달 창 열기
  };

  const onclickWithdrawalBtn = () => {
    // slice로 모달 창 열기
    // form 내에서 아래 api로 탈퇴 요청
    // const res = axios.delete(`${domain}/api/main/auth/withdrawal`, userData);
  };

  return (
    <div>
      <AuthFormBlock>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="emailInput">email*</label>
          <StyledInput
            id="emailInput"
            name="userEmail"
            value={userState.email}
            readOnly
            required
          />
          <ResultText>{"이메일은 수정할 수 없습니다"}</ResultText>

          <label htmlFor="nicknameInput">닉네임*</label>
          <StyledInput
            id="nicknameInput"
            name="nickname"
            value={userState.nickName}
            readOnly
            required
          />
          <ResultText>{"닉네임은 수정할 수 없습니다"}</ResultText>

          <label htmlFor="passwordInput">비밀번호*</label>
          <StyledInput
            id="passwordInput"
            autoComplete="off"
            name="Password"
            placeholder="새 비밀번호를 입력해주세요"
            type="password"
            onChange={onChangePassword}
            value={userState.password}
            required
          />
          <ResultText>{validText.password}</ResultText>

          <label htmlFor="passwordConfirmInput">비밀번호 확인*</label>
          <StyledInput
            id="passwordConfirmInput"
            autoComplete="off"
            name="PasswordConfirm"
            placeholder="새 비밀번호를 다시 입력해주세요"
            type="password"
            onChange={onChangeConfirmPassword}
            value={userState.confirmPassword}
            readOnly={userState.password === "" ? true : false}
            required
          />
          <ResultText>{validText.confirmPassword}</ResultText>

          <label htmlFor="passwordInput">성별*</label>
          <label className="gender">
            <input
              type="radio"
              name="gender"
              value="남성"
              checked={userState.gender === "남성"}
              onChange={onChangeGender}
              required
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
            onChange={onChangeAge}
            required
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
            required
          ></TextArea>
          <p className="useIntroDescription">{validText.introduce}</p>

          <Button className="modifyInfoBtn" type="submit">
            회원정보 수정
          </Button>
          <Button className="withdrawalBtn" onClick={onclickWithdrawalBtn}>
            회원탈퇴
          </Button>
        </form>
      </AuthFormBlock>
    </div>
  );
};

export default UpdateUserInfoFrom;
