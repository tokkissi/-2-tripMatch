import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { matchMockData, freeMockData } from "./components/mockData";
import Title from "../../components/Title/Title";
import { uploadImg } from "../../utils/uploadImg";

const Home = () => {
  // input에서 파일을 선택했을 때 바로 uploadImg 함수를 적용하지 마시고
  // input에서 변화 있을 때 useState와 같은 hook을 통해 파일 변화값을 따로 저장해 주세요.
  // 그 후에 '업로드하기'와 같은 버튼(개인정보 수정페이지에서는 수정하기 버튼이거나 게시글 등록 페이지에서는 게시글 등록 버튼이겠쬬?)을 눌렀을때
  // uploadImg 함수가 실행되도록 해주세요. input onChange에 함수를 걸어버리시면 사용자가 input에서 사진을 바꿀때마다 클라우드에 업로드 됩니다.
  // 사용 예시 아래 참고

  // input에 들어온 파일 저장
  const [img, setImg] = useState<File | string>("");

  return (
    <div>
      {/* 사진 업로드 input 예시 */}
      <input
        name="photo"
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setImg(e.target.files[0]);
          }
        }}
      />
      <button
        onClick={() => {
          uploadImg(img).then((res) => console.log(res));
        }}
      >
        업로드하기
      </button>
      {/* 예시는 여기까지 */}
      <Carousel />
      <Title title="동행게시판" location="/" />
      <MakeMatchPostList data={matchMockData} />
      <FreePostPreview freePostList={freeMockData} location="/" />
      <FestivalList location="/" />
      {/* <ReviewModal email="naver.com" /> */}
    </div>
  );
};

export default Home;
