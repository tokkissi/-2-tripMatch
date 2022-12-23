import React, { useEffect, useState } from "react";
import { Container, FreePostList } from "./FreePostPreviewStyle";
import { Link, useLocation } from "react-router-dom";
import { FreePostType } from "../../../type/freePost";

const joinDateFormat = (createdAt: string | undefined) => {
  return (
    createdAt?.slice(0, 4) +
    "." +
    createdAt?.slice(5, 7) +
    "." +
    createdAt?.slice(8, 10)
  );
};

interface FreePostProps {
  freePostList: FreePostType[];
  location: string;
}

const FreePostPreview: React.FC<FreePostProps> = ({
  freePostList,
  location,
}) => {
  const [freePost, setFreePost] = useState<FreePostType[]>([]);
  // const location = useLocation().pathname;

  console.log("1:", Date.now());
  console.log(location);
  useEffect(() => {
    setFreePost(freePostList);
    console.log("2:", Date.now());
    return console.log("3:", Date.now());
  }, [freePostList]);

  return (
    <Container>
      {location === "home" && (
        <div className="title">
          <h3>자유게시판</h3>
          <Link to="/free">더보기 &gt;</Link>
        </div>
      )}
      <FreePostList>
        {freePost.map((item) => {
          return (
            <Link to={`/free/${item.communityId}`} key={item.communityId}>
              <div className="item">
                <span className="region">[{item.region}]</span>
                <span className="category">[{item.category}]</span>
                <span className="itemTitle">{item.title}</span>
                <span className="createDate">
                  {joinDateFormat(item.createdAt)}
                </span>
              </div>
            </Link>
          );
        })}
      </FreePostList>
    </Container>
  );
};

export default FreePostPreview;
