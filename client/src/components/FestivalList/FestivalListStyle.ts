import styled from "styled-components";
import FestivalList from "./FestivalList";

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
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const FestivalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .item {
    width: 23%;
    margin: 1% 1%;
    position: relative;
    background-color: green;
  }
`;

export { Container, FestivalInfo };
