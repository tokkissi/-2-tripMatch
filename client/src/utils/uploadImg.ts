import axios from "axios";

export const uploadImg = async (img: File | string) => {
  const imgData = new FormData();
  imgData.append("file", img);
  imgData.append("upload_preset", "tripMatch");
  imgData.append("cloud_name", "dk9scwone");

  const imgUrl = await axios
    .post("https://api.cloudinary.com/v1_1/dk9scwone/image/upload", imgData)
    .then((res) => res.data.url)
    .catch((err) =>
      alert(`파일 업로드가 실패했습니다. 다시 시도해 주세요. ${err.message}`),
    );

  return imgUrl;
};
