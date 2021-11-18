import styled from "styled-components";

export const Container = styled.div`
    background-color: #25084B;
    color: #FFF;
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 960px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
    width: 240px;
    border-right: 1px solid #35195C;
`;

export const Page = styled.div`
    flex: 1;
    padding: 40px 0 0 40px;
`;
