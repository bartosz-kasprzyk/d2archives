import styled from "styled-components";

export const LoadingWrapper = styled.div`
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    padding-top: 300px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding-top: 0;
        top: 230px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        top: 180px;
    }
`;

export const StyledLoading = styled.img`
    width: 500px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 400px;
        height: 350px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 300px;
        height: 300px;
    }
`;