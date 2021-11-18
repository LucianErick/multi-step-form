import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${(props) => (props.selected ? "#04d361" : "#282A5E")};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  transition: all ease 0.25s;
  cursor: pointer;

  &:hover {
    border: 2px solid #04d361;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2a2b6a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 6px;
  color: #b8b8d4;
`;
