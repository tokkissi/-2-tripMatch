import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  width: 800px;
  height: 700px;
  margin: 30px auto;
  background-color: beige;
`;

export const Top = styled.div`
  width: 750px;
  height: 80px;
  margin: 20px auto;
  background-color: white;
`;

export const MidContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const SideBar = styled.div`
  width: 150px;
  height: 500px;
  margin: 10px 0 10px 30px;
  background-color: white;
`;

export const Content = styled.div`
  width: 565px;
  height: 500px;
  margin: 10px 0 10px 10px;
  background-color: white;
`;
