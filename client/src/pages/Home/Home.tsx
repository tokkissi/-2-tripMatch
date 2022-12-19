import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { Title, Modal } from "./HomeStyle";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
        <Title>
          <h3>동행게시판</h3>
          <Link to="/">더보기</Link>
        </Title>
        <MakeMatchPostList />
        <FreePostPreview />
        <FestivalList />
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Home;
