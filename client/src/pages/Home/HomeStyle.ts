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
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modalCard {
    width: 300px;
    height: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
  }
`;

export { Title, Modal };
