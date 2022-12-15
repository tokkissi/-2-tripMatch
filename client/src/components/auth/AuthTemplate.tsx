import React from "react";
import styled from "styled-components";

// 회원가입 / 로그인 페이지에서의 회색 배경의 흰색 박스 레이아웃 컴포넌트

// 화면 전체 배경색 채우기
const AuthTemplateBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

// form 입력할 흰색 박스
const WhiteBox = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  background-color: ${(props) => props.theme.color.lightpink};
  border-radius: 0.8rem;
  width: 60%;
  max-width: 50rem;
  min-width: 18em;
  margin: 10% 0;
  .title {
    margin-top: 3rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
  }
`;

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="title">TripMatch</div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
