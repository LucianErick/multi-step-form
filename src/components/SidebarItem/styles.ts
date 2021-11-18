import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  color: #fff;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 12px;
  color: #b8b8d4;
`;

export const Icon = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#04d361" : "#494a7c")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border: 3px solid #494a7c;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -7px;
  background-color: ${(props) => (props.active ? "#04d361" : "#25084b")};
`;
