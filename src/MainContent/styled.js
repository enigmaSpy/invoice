import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    justify-content: space-around;
    background: teal;
    @media screen and (max-width: 767px) {
        flex-direction: column;
      }
`;