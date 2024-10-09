import styled from "styled-components";

export const LoadingWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 300px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding-top: 0;
    }
`;

export const StyledLoading = styled.img`
    width: 500px;
    height: 400px;
    margin: 50px auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 400px;
        height: 350px;
        margin-top: -70px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 300px;
        height: 300px;
        margin-top: 130px;
    }
`;