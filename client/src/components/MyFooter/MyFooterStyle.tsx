import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.color.lightblue};

  .info {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "comInfo comInfo"
      "legalInfo snsLogo"
      "copyright snsLogo";
  }
  .comInfo {
    grid-area: comInfo;
  }
  .snsLogo {
    grid-area: snsLogo;
  }
  .legalInfo {
    grid-area: legalInfo;
  }
  .copyright {
    grid-area: copyright;
  }
`;

export default Footer;
