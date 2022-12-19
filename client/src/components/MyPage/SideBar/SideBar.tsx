// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBar, Box } from "./SideBarStyle";

const SideBarComponent: React.FC = () => {
  // const [color, setColor] = useState<boolean>(false);

  // className={color ? "color" : ""} onClick={() => setColor(!color)}

  // const colorHandler = (e: any) => {
  //   e.preventDefault();
  //   setColor(!color);
  // };

  return (
    <SideBar>
      <Box value="정보 수정">정보 수정</Box>
      <Link to="/mypage">
        <Box value="게시글 내역">게시글 내역</Box>
      </Link>
      <Link to="/myComment">
        <Box value="댓글 내역">댓글 내역</Box>
      </Link>
      <Box value="신청받은 내역">신청받은 내역</Box>
      <Box value="신청한 내역">신청한 내역</Box>
    </SideBar>
  );
};

export default SideBarComponent;
