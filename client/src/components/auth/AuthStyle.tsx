import styled from "styled-components";

const AuthFormBlock = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 3rem;
    font-weight: 600;
  }
  label {
    display: inline-block;
    font-size: 2rem;
    width: 10rem;
    margin-top: 3rem;
    margin-right: 1rem;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  max-width: 30rem;
  font-size: 2rem;
  margin: 1.5rem 0;
  border: none;
  outline: none;
  border-bottom: 1px solid grey;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const SummitBtn = styled.div`
  font-size: 2rem;
  display: inline-block;
  border-radius: 0.8rem;
  text-align: center;
  padding: 1.6rem;
  margin: 2rem 0;
  background-color: ${(props) => props.theme.color.pink};
  &:hover {
    background-color: ${(props) => props.theme.color.lightblue};
  }
  &.submit {
    display: block;
  }
`;

const Footer = styled.span`
  font-size: 1.6rem;
  display: block;
  padding: 1rem;
  text-align: right;
  color: gray;
  margin-bottom: 2rem;
  a:visited {
    font-size: 5rem;
    color: gray;
  }
`;

export { AuthFormBlock, StyledInput, SummitBtn, Footer };
