import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, FestivalInfo } from "./FestivalListStyle";
import { mockData } from "./mockData";
import { Response } from "express";
import axios from "axios";
import { Body } from "./../../pages/MyPage/MyPageStyle";

interface Item {
  addr1: string;
  addr2: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  eventstartdate: string;
  eventenddate: string;
  firstimage: string;
  firstimage2: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  readcount: number;
  areacode: string;
  sigungucode: string;
  tel: string;
  title: string;
}

const FestivalList = () => {
  const [festivalInfo, setFestivalInfo] = useState<Item[]>([]);
  const date = new Date();
  const eventStartDate = `${date.getFullYear()}${date.getMonth() + 1}01`;
  const serviceKey =
    "7vK0Tt5CPNrirky41NfjhrXhOVngGJ0McJjDrgASEMepGMEtUXEP1%2Fy2wlH6mAUF4U%2FJAUtS0xsaYjtn3NLGgA%3D%3D";

  useEffect(() => {
    // const getData = async () => {
    //   const response = await axios.get(`http://apis.data.go.kr/B551011/KorService/searchFestival?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=C&_type=json&serviceKey=${serviceKey}&eventStartDate=${eventStartDate}`)
    // }
    setFestivalInfo(mockData);
  }, []);

  return (
    <Container>
      <div className="title">
        <h3>축제정보</h3>
        <Link to="/">더보기</Link>
      </div>
      <FestivalInfo>
        {festivalInfo &&
          festivalInfo.map((item) => {
            return <div></div>;
          })}
      </FestivalInfo>
    </Container>
  );
};

export default FestivalList;
