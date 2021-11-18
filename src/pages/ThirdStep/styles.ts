import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 14px;
    color: #b8b8d4;
  }

  h1 {
    margin: 8px 0 8px 0;
    padding: 0;
    font-size: 24px;
  }
  hr {
    height: 2px;
    border: 0;
    background-color: #35195c;
    margin: 30px 0;
  }

  label {
    font-size: 14px;
    letter-spacing: 0.5px;

    input {
      display: block;
      margin-top: 8px;
      box-sizing: border-box;
      width: 100%;
      padding: 16px 10px;
      border-radius: 8px;
      border: 2px solid #04d361;
      color: #fff;
      outline: 0;
      font-size: 16px;
      background-color: #25084b;
    }

    input:first-child {
        margin-bottom: 24px;
    }
  }

  button:not(.previousButton) {
    background-color: #04d361;
    color: #fff;
    padding: 12px 18px;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    border-radius: 24px;
    cursor: pointer;
    margin-top: 32px;
    transition: all ease 0.25s;

    &:hover {
      background-color: #029a56;
    }
  }

  .previousButton {
    background: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    color: #b8b8d4;
    margin-right: 24px;
    transition: all ease 0.25s;

    &:hover {
      opacity: 0.75;
    }
  }
`;
