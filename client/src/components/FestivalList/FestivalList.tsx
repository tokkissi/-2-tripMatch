import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, FestivalInfo, ModalCard } from "./FestivalListStyle";
import axios from "axios";
import TitleStyle from "../Title/TitleStyle";
import Title from "../Title/Title";

interface Item {
  [key: string]: string;
}

interface ItemObj {
  item: Item;
}

interface LocationProps {
  location: string;
}

const FestivalList: React.FC<LocationProps> = ({ location }) => {
  const [festivalInfo, setFestivalInfo] = useState<Item[]>([]);
  const [itemInfo, setItemInfo] = useState<Item>({});
  const [festivalModal, setFestivalModal] = useState(false);

  const getInfo = async (infoType: string) => {
    const response = await axios
      .get(`http://34.64.156.80:3003/api/main/infoes/${infoType}`)
      .then((res) =>
        res.data.sort((a: Item, b: Item) => {
          return Number(a.eventstartdate) - Number(b.eventstartdate);
        }),
      );
    location === "/"
      ? setFestivalInfo(response.slice(0, 8))
      : setFestivalInfo(response);
    return;
  };

  useEffect(() => {
    getInfo("festival");
  });

  const dateFormat = (date: string) => {
    return date.slice(0, 4) + "." + date.slice(4, 6) + "." + date.slice(6, 8);
  };

  const InfoModal: React.FC<ItemObj> = ({ item }) => {
    return (
      <ModalCard>
        <div className="modalCard">
          <img
            className="closeModal"
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671625307/free-icon-cancel-8532370_kuiqk1.png"
            onClick={(e) => {
              e.stopPropagation();
              setFestivalModal(false);
            }}
          />

          <img src={item.firstimage} className="festivalImg" />
          <div className="info">
            <div className="festivalTitle">{item.title}</div>
            <div className="festivalDate">
              {dateFormat(item.eventstartdate)}~{dateFormat(item.eventenddate)}
            </div>
            <div className="address">{item.addr1}</div>
            <div className="tel">{item.tel}</div>
          </div>
        </div>
      </ModalCard>
    );
  };

  return (
    <div>
      {location === "/" ? (
        <Title title="여행정보" location="/" />
      ) : (
        <TitleStyle>
          <h3>
            <span
              onClick={() => {
                getInfo("festival");
              }}
            >
              축제정보
            </span>
            <span>숙박정보</span>
          </h3>
        </TitleStyle>
      )}
      <Container>
        <FestivalInfo>
          {festivalInfo &&
            festivalInfo.map((item) => {
              return (
                <div
                  className="item"
                  key={item.contentid}
                  onClick={(e) => {
                    e.stopPropagation();
                    setItemInfo(item);
                    setFestivalModal(true);
                  }}
                >
                  <img src={item.firstimage} />
                  <div className="itemTitle">
                    {item.title.length > 29
                      ? item.title.slice(0, 29) + "..."
                      : item.title}
                  </div>
                  <div className="itemDate">
                    {dateFormat(item.eventstartdate)}~
                    {dateFormat(item.eventenddate)}
                  </div>
                </div>
              );
            })}
          {festivalModal && <InfoModal item={itemInfo} />}
        </FestivalInfo>
        {location === "festival" ? (
          <div className="shortCutBtn">
            <div>혼자 가기 외로울 땐?</div>
            <Link to="/match/write">
              <button>동행 신청 바로가기</button>
            </Link>
          </div>
        ) : (
          false
        )}
      </Container>
    </div>
  );
};

export default FestivalList;
