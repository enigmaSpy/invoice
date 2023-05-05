import styled, { css } from 'styled-components';

export const ServiceListWrapper = styled.div`
    max-width: 100%;
    
`;

export const TableWrapper = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 24px;
    @media (max-width: 768px) {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }
`;
export const TableBody = styled.tbody`
    
  `;
export const Th = styled.th`
    background-color: #f5f5f5;
    padding: 8px 16px;
    text-align: left;

    ${({ actions }) => actions && css`
        text-align: center;
        color: blue;
    `};
    ${(({ keyName }) => keyName && css`
      width:300px;
      color:blue;
    `)}
`;

export const Td = styled(Th)`
    padding: 8px 16px;
    text-align:center;
    ${({quantity})=> quantity && css`
        text-align:end;
    `};
    ${({unit})=>unit&&css`
        text-align:start;
    `};
    ${({discount})=>discount&&css`
        color: red;
    `};
`;

export const Button = styled.button`
    padding: 8px 16px;
    margin-right: 8px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #0077cc;
    cursor: pointer;

    &:hover {
        background-color: #005fa3;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;