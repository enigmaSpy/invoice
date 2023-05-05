import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    background: teal;
    @media screen and (max-width: 767px) {
        flex-direction: column;
      }
`;