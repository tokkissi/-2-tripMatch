import styled from "styled-components";

export const Content = styled.div`
  width: 750px;
  height: 540px;
  margin-left: 20px;
  margin-right: 12px;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.11);
  font-size: ${(props) => props.theme.font.M};
  font-weight: 600;

  thead {
    position: sticky;
    top: 0;
    z-index: 3;
  }

  table {
    width: 750px;
    height: 540px;
    vertical-align: middle;

    tr {
      display: grid;
      grid-template-columns: 1fr 130px 120px 180px;
      gap: 20px;
      text-align: center;
      padding-top: 10px;
      height: 55px;
      vertical-align: middle;
    }

    #first {
      position: relative;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${(props) => props.theme.color.pink};
    }

    th {
      padding: 15px;
      height: 20px;
      padding: 15px 20px 10px 23px;
      font-size: ${(props) => props.theme.font.M};
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
    }

    td {
      cursor: pointer;
      padding: 15px 20px 10px 23px;
      height: 50px;
      font-size: ${(props) => props.theme.font.S};
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #title {
      text-align: left;
      padding-left: 40px;
    }

    #last {
      padding-top: 7px;

      button {
        cursor: pointer;
        width: 70px;
        height: 30px;
        border-radius: 5px;
        border: none;
      }
      #review {
        background-color: ${(props) => props.theme.color.lightblue};
      }

      #cancel {
        background-color: ${(props) => props.theme.color.lightpink};
      }
    }
  }
`;

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 5px;
    font-size: ${(props) => props.theme.font.XS};
  }
`;

export const Layer = styled.div`
  width: 750px;
  height: 510px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    width: 7px;
    border-radius: 10px;
  }
`;
