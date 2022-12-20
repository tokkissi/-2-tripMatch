import React from "react";
import styled from "styled-components";

// 화면 전체 배경색 채우기
const AuthTemplateBlock = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// form 입력할 핑크색 박스
const PinkBox = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.lightpink};
  border-radius: 0.5rem;
  margin-top: 3rem;
  max-width: 40rem;
  min-width: 25em;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  margin-bottom: 4rem;
  .title {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
`;

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <AuthTemplateBlock>
      <PinkBox>
        <div className="title">TripMatch</div>
        {children}
      </PinkBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
