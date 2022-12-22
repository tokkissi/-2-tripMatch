import Header from "./MyHeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const MyHeader = () => {
  const search = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSearch = () => {
    console.log(search.current?.value);
  };
  return (
    <Header>
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671436634/temporaryLogo_l9x22i.png"
            alt="TripMatch"
          />
        </Link>
      </div>
      <div className="searchBar">
        <input
          type="text"
          ref={search}
          placeholder="지역명으로 검색해 보세요."
        ></input>
        <img
          src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
          alt="검색"
          onClick={onSearch}
        />
      </div>
      <div className="navBar">
        <Link to="/match">
          <img
            className="firstImg"
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconShake_jywmku.png"
            alt="동행게시판"
          />
        </Link>
        <Link to="/free">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconbubble_h1lmf7.png"
            alt="자유게시판"
          />
        </Link>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671184505/free-icon-heart-shape-39559_aatqxl.png"
            alt="위시리스트"
          />
        </Link>
        <Link to="/mypage">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconHuman_j9fibe.png"
            alt="마이페이지"
          />
        </Link>
      </div>
    </Header>
  );
};

export default MyHeader;
