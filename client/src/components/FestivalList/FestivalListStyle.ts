import styled from "styled-components";
import Modal from "../../styles/Modal";

const Container = styled.div`
  width: 60vw;
  margin: 50px auto;

  .title {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    cursor: default;
    font-family: ${(props) => props.theme.font.content};
    font-size: ${(props) => props.theme.font.L};
    font-weight: bold;
  }

  a {
    font-family: ${(props) => props.theme.font.content};
    font-size: ${(props) => props.theme.font.M};
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: normal;
  }
`;

const FestivalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .item {
    width: 21%;
    margin: 1% 1%;
    padding: 1% 1%;
    position: relative;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.color.lightblue},
      ${(props) => props.theme.color.lightblue},
      ${(props) => props.theme.color.lightpink}
    );

    img {
      width: 100%;
      height: 13vw;
      object-fit: cover;
      // object-position: center top;
    }

    .itemTitle {
      height: 40px;
      line-height: 20px;
      margin-top: 10px;
    }

    .itemDate {
      margin-top: 5px;
      color: #b1b1b1;
    }
  }
`;

const ModalCard = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.05);
`;

export { Container, FestivalInfo, ModalCard };
