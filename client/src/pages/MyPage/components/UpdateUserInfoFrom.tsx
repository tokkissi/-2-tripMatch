import axios from "axios";
import React, {
  // ChangeEvent,
  // useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import {
  AuthFormBlock,
  Button,
  GenderWrapper,
  ResultText,
  Select,
  StyledInput,
  TextArea,
} from "../../../components/Auth/AuthStyle";
import {
  checkConfirmPassword,
  checkIntroduce,
  checkNickname,
  checkPassword,
} from "../../../components/Auth/validation";

import {
  ModalButtonContainer,
  ModalContentContainer,
  ModalTitle,
  // ProfileImage,
  // ProfileInput,
  UpdateModal,
} from "../MyPageStyle";
import { UpdateUserinfoTitle } from "./SideBarStyle";

const UpdateUserInfoFrom = () => {
  type FormType =
    | "nickName"
    | "password"
    | "age"
    | "introduce"
    | "profileImg"
    | "withdrawal";

  type EncodingType = {
    nickName: "닉네임";
    password: "비밀번호";
    age: "나이";
    introduce: "자기소개";
    profileImg: "프로필 사진";
    email: "이메일";
    withdrawal: "회원탈퇴";
  };

  type ValidOptionType = "nickName" | "confirmPassword" | "introduce";

  // const domain = "http://localhost:5000";

  const AgeOption = [
    { value: "default", name: "선택" },
    { value: "10대", name: "10대" },
    { value: "20대", name: "20대" },
    { value: "30대", name: "30대" },
    { value: "40대", name: "40대" },
    { value: "50대", name: "50대" },
    { value: "60대 이상", name: "60대 이상" },
  ];

  const navigate = useNavigate();
  const modifiedText = useRef<string | null>(null);

  const [valid, setValid] = useState(false);
  // 모달창 활성화 여부
  const [modal, setModal] = useState(false);
  // 모달창 내용
  const [modalForm, setModalForm] = useState<FormType>();
  // 모달 외부 클릭 처리에 사용할 모달 엘리먼트
  const modalEl = useRef<HTMLDivElement>(null);
  // const imgInputEl = useRef<HTMLInputElement>(null);

  const [userState, setUserState] = useImmer({
    email: "",
    nickName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    introduce: "",
    profileImg: "",
  });

  const krEncoding: EncodingType = {
    nickName: "닉네임",
    password: "비밀번호",
    age: "나이",
    introduce: "자기소개",
    profileImg: "프로필 사진",
    email: "이메일",
    withdrawal: "회원탈퇴",
  };

  const checkTable = {
    nickName: "사용가능한 닉네임 입니다",
    confirmPassword: "비밀번호 확인이 완료되었습니다",
    introduce:
      "SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)",
  };

  const [validText, setValidText] = useImmer({
    password: "8~20자, 영문, 숫자, 특수문자 모두 사용",
    nickName: "새 닉네임을 적어주세요",
    confirmPassword: "비밀번호를 다시 한 번 입력해주세요",
    introduce:
      "SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)",
  });

  //첫 로딩 시, 기존 user정보 요청
  useEffect(() => {
    const loadUserInfo = async () => {
      // 응답 api url 추후 변경 예정
      try {
        // const res = await axios.get(`${domain}/api/main/auth/userInfo`);
        const res = await axios.get("http://localhost:4000/userInfo");
        // 응답 코드 추후 변경 예정
        if (res.status === 200) {
          return res.data;
          // 비로그인으로 접근 시, 실패 코드
        } else if (res.status === 401) {
          alert("로그인 후 사용가능한 페이지입니다");
          navigate("/login");
        } else {
          throw new Error(
            "/api/main/auth/userInfo 의 응답 status 코드가 200, 401 에 해당하지 않습니다",
          );
        }
      } catch (error) {
        alert("유저 정보 가져오기가 실패했습니다");
        console.error(error);
      }
    };

    const loadData = loadUserInfo();
    loadData.then((res) => {
      console.log(res);
      setUserState((draft) => {
        draft.profileImg = res.profileImg;
        draft.email = res.email;
        draft.nickName = res.nickName;
        draft.gender = res.gender;
        draft.age = res.age;
        draft.introduce = res.introduce;
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // 추후 이미지 api 스펙 확정 시 다시 제작
  // const checkFileSize = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];
  //     const fileSize = file.size;
  //     const maxSize = 10 * 1024 * 1024;
  //     if (fileSize > maxSize) {
  //       alert("10MB 이하의 이미지만 사용가능합니다");
  //       return false;
  //     }
  //     return true;
  //   }
  // }, []);

  // const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (checkFileSize(e)) {
  //     setUserState((draft) => {
  //       draft.profileImg = e.target.files[0];
  //     });
  //   }
  // };

  const checkValidText = (option: ValidOptionType, inputText: string) => {
    if (inputText === checkTable[option]) {
      return true;
    }
    return false;
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 수정 버튼 클릭 시, 아래 주석 코드 실행 후, api 요청
    // setUserState((draft) => {
    //   draft.nickName = e.target.value;
    // });
    setValidText((draft) => {
      draft.nickName = checkNickname(e.target.value);
    });
    if (checkValidText("nickName", validText.nickName)) {
      if (valid === false) {
        setValid(true);
        modifiedText.current = e.target.value;
        console.log("수정 api 요청 가능!");
        console.log("커런트타겟: ", modifiedText.current);
      }
    } else {
      if (valid === true) {
        setValid(false);
      }
    }
  };

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

  const activeModal = (reqForm: FormType) => {
    setModal(true);
    setValid(false);
    setModalForm(reqForm);
  };

  // 모달창 외에 클릭 시 모달 닫기
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalEl.current !== null) {
      if (
        (modal && !modalEl.current) ||
        !modalEl.current.contains(e.target as HTMLElement)
      ) {
        setModal(false);
      }
    }
  };

  return (
    <div>
      {modal && (
        <UpdateModal onClick={closeModal}>
          <div className="updateModalForm" ref={modalEl}>
            <ModalTitle>{modalForm && krEncoding[modalForm]}</ModalTitle>
            <ModalContentContainer>
              {/*변경 사항 구현부*/}
              {modalForm === "nickName" && (
                <>
                  <StyledInput
                    id="nicknameInput"
                    name="nickname"
                    // value={userState.nickName}
                    onChange={onChangeNickName}
                  />
                  <ResultText>{validText.nickName}</ResultText>
                </>
              )}
              {modalForm === "password" && (
                <>
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
                </>
              )}
              {modalForm === "age" && (
                <>
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
                </>
              )}
              {modalForm === "introduce" && (
                <>
                  <TextArea
                    name="introduce"
                    id="introduceText"
                    rows={8}
                    placeholder="100자 이내로 소개해주세요"
                    onChange={onChangeIntroduce}
                    value={userState.introduce}
                  >
                    {userState.introduce}
                  </TextArea>
                  <p className="useIntroDescription">{validText.introduce}</p>
                </>
              )}
            </ModalContentContainer>
            <ModalButtonContainer>
              <button className="cancel" onClick={() => setModal(false)}>
                취소
              </button>
              <button className="modify">수정</button>
            </ModalButtonContainer>
          </div>
        </UpdateModal>
      )}

      <AuthFormBlock>
        <UpdateUserinfoTitle>회원 정보 수정</UpdateUserinfoTitle>

        {/* <label>프로필 사진</label>

        <ProfileImage onClick={() => imgInputEl.current?.click()} />
        <ProfileInput
          ref={imgInputEl}
          type="file"
          accept="image/*"
          onChange={onChangeImage}
        /> */}

        <label htmlFor="emailInput">email</label>
        <StyledInput
          id="emailInput"
          name="userEmail"
          value={userState.email}
          readOnly
        />
        <ResultText>{"이메일은 수정할 수 없습니다"}</ResultText>

        <label className="updateLabel" htmlFor="nicknameInput">
          닉네임
        </label>
        <Button
          data-name="nickName"
          className="update"
          onClick={() => activeModal("nickName")}
        >
          수정
        </Button>
        <StyledInput
          id="nicknameInput"
          name="nickname"
          value={userState.nickName}
          onChange={onChangeNickName}
          readOnly
        />

        <label className="updateLabel" htmlFor="passwordInput">
          비밀번호
        </label>
        <Button
          name="test"
          className="update"
          onClick={() => {
            activeModal("password");
          }}
        >
          수정
        </Button>
        <br />

        <label className="updateLabel">성별</label>
        <GenderWrapper>
          <label className="gender">
            <input
              className="gender"
              type="radio"
              name="gender"
              value="남성"
              checked={userState.gender === "남성"}
              readOnly
            />
            남성
          </label>
          <label className="gender">
            <input
              className="gender"
              type="radio"
              name="gender"
              value="여성"
              checked={userState.gender === "여성"}
              readOnly
            />
            여성
          </label>
        </GenderWrapper>
        <ResultText>{"성별은 수정할 수 없습니다"}</ResultText>

        <label className="updateLabel" htmlFor="ageSelect">
          나이
        </label>
        <Button className="update" onClick={() => activeModal("age")}>
          수정
        </Button>
        <Select
          id="ageSelect"
          className="ageSelect"
          defaultValue={userState.age}
          disabled
        >
          <option value={userState.age}>{userState.age}</option>
        </Select>

        <label className="updateLabel" htmlFor="introduceText">
          자기소개
        </label>
        <Button className="update" onClick={() => activeModal("introduce")}>
          수정
        </Button>
        <TextArea
          name="introduce"
          id="introduceText"
          rows={8}
          placeholder="100자 이내로 소개해주세요"
          onChange={onChangeIntroduce}
          value={userState.introduce}
          disabled
        >
          {userState.introduce}
        </TextArea>
        <p className="useIntroDescription">{validText.introduce}</p>

        <UpdateUserinfoTitle className="withdrawalTitle">
          회원 탈퇴
        </UpdateUserinfoTitle>
        <Button
          className="withdrawalBtn"
          onClick={() => activeModal("withdrawal")}
        >
          회원 탈퇴
        </Button>
      </AuthFormBlock>
    </div>
  );
};

export default UpdateUserInfoFrom;
