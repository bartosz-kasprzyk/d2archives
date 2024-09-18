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
`;

export const StyledLoading = styled.img`
    width: 500px;
    height: 400px;
    margin: 50px auto;
`;