import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "../../components/Title/Title";
import { useGetAllMatchPostQuery } from "../../slice/matchPostApi";
import NotFound from "../../components/NotFound/NotFound";
import { useGetAllFreePostQuery } from "../../slice/freePostApi";
import { useState } from "react";
import { useUpdateImgMutation } from "../../slice/uploadImgApi";

const Home = () => {
  const [img, setImg] = useState<File | string>("");
  const [updateImg, { error, isLoading }] = useUpdateImgMutation();

  const email = sessionStorage.getItem("email");

  const {
    data: matchData,
    isError: matchError,
    isLoading: matchLoading,
  } = useGetAllMatchPostQuery({ page: 1, ...(email && { email }) });

  const {
    data: freeData,
    isError: freeError,
    isLoading: freeLoading,
  } = useGetAllFreePostQuery({ page: 1 });

  return (
    <>
      <input
        name="photo"
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setImg(e.target.files[0]); //input에 들어온 파일을 img 변수에 저장
          }
        }}
      />
      <button
        onClick={() => {
          const imgData = new FormData(); //formdata 객체 생성
          imgData.append("upload_preset", "tripMatch"); //클라우디너리 설정값이므로 반드시 넣어주세요.
          imgData.append("cloud_name", "dk9scwone"); //클라우디너리 설정값이므로 반드시 넣어주세요.
          imgData.append("file", img); //객체에 파일값 넣음

          console.log(imgData);
          updateImg(imgData)
            .unwrap()
            .then((res) => {
              console.log(Object.values(res)[15]);
              //res.url로 바로 출력이 안되어서 돌아돌아 url이 출력되도록 했습니다. 이유는 오피스아워 시간에 알아보는 걸로...
            })
            .catch((err) => console.log(err));
        }}
      >
        업로드하기
      </button>
      {error && <div>에러</div>}
      {isLoading && <div>로딩중...</div>}

      <Carousel />
      <Title title="동행게시판" location="/" />
      {matchData ? <MakeMatchPostList data={matchData.posts} /> : <NotFound />}
      <Title title="자유게시판" location="/" />
      {freeData ? (
        <FreePostPreview freePostList={freeData?.communities} location="/" />
      ) : (
        <NotFound />
      )}
      <FestivalList location="/" />
    </>
  );
};

export default Home;
