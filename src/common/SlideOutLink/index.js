import React from 'react';
import { ButtonContainer, StyledIcon } from './styled';

export const SlideOutLink = ({ icon, text, href, $bottom, $color, $translateX }) => (
    <ButtonContainer
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        $bottom={$bottom}
        $color={$color}
        $translateX={$translateX}
    >
        <StyledIcon src={icon} />
        {text}
    </ButtonContainer>
);