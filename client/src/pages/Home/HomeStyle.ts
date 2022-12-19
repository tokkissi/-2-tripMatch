import styled from "styled-components";

const Title = styled.div`
  width: 60vw;
  margin: 50px auto 0 auto;

  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: default;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modalCard {
    width: 18vw;
    height: 20vh;
    margin: auto;
    padding: 2vh 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: white;

    .userInfo {
      width: 210px;
      margin-bottom: 5%;
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 0.8fr 1.7fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "img nickname"
        "img detailInfo";

      img {
        grid-area: img;
        width: 3.5vw;
        height: 3.5vw;
        object-fit: cover;
      }
      .nickname {
        grid-area: nickname;
      }
      .detailInfo {
        grid-area: detailInfo;
      }
    }

    .guide {
      margin-top: 5%;
      color: #b1b1b1;
    }

    .btn {
      margin-top: 5%;

      button {
        margin: 0 5px;
      }
    }
  }
`;

export { Title, Modal };
