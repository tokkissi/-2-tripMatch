import React from "react";
import Footer from "./MyFooterStyle";

const MyFooter = () => {
  return (
    <Footer>
      <div className="info">
        <div className="comInfo">
          <div>(주)TripMatch</div>
          <div>
            <div>대표</div>
            <div>토끼씨</div>
          </div>
          <div>
            <div>개인정보보호책임</div>
            <div>김제원</div>
          </div>
          <div>국내시 동행구 여행동 82길 28</div>
        </div>
      </div>
      <div className="legalInfo"></div>
      <div className="copyright"></div>
      <div className="snsLogo"></div>
    </Footer>
  );
};

export default MyFooter;
