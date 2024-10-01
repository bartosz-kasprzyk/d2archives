import React from 'react';
import { ButtonContainer, StyledIcon } from './styled';

export const SlideOutLink = ({ icon, text, href, $bottom, $bottomPhone, $color, $translateX, $translateXPhone }) => (
    <ButtonContainer
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        $bottom={$bottom}
        $bottomPhone={$bottomPhone}
        $color={$color}
        $translateX={$translateX}
        $translateXPhone={$translateXPhone}
    >
        <StyledIcon src={icon} />
        {text}
    </ButtonContainer>
);