import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBar, Box } from "./SideBarStyle";

const SideBarComponent: React.FC = () => {
  const [color, setColor] = useState<boolean>(false);
  return (
    <SideBar>
      <Box
        value="정보 수정"
        className={color ? "color" : ""}
        onClick={() => setColor(!color)}
      >
        정보 수정
      </Box>
      <Link to="/mypage">
        <Box
          value="게시글 내역"
          className={color ? "color" : ""}
          onClick={() => setColor(!color)}
        >
          게시글 내역
        </Box>
      </Link>
      <Link to="/myComment">
        <Box
          value="댓글 내역"
          className={color ? "color" : ""}
          onClick={() => setColor(!color)}
        >
          댓글 내역
        </Box>
      </Link>
      <Box
        value="신청받은 내역"
        className={color ? "color" : ""}
        onClick={() => setColor(!color)}
      >
        신청받은 내역
      </Box>
      <Box
        value="신청한 내역"
        className={color ? "color" : ""}
        onClick={() => setColor(!color)}
      >
        신청한 내역
      </Box>
    </SideBar>
  );
};

export default SideBarComponent;
