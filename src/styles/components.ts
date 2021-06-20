import styled from 'styled-components';

export const StyledApp = styled.div`
    text-align: center;
`;

export const StyledAppBody = styled.header`
    background-color: ${({ theme }) => theme.colors.operaMauve};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
