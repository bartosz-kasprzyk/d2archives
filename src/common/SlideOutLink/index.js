import React, { useEffect, useRef, useState } from 'react';
import { ButtonContainer, StyledIcon } from './styled';
import { useScreenWidth } from '../hooks/useScreenWidth';

export const SlideOutLink = ({ icon, text, href, $bottom, $bottomPhone, $color, $translateX, $translateXPhone }) => {
    const [translateXPhone, setTranslateXPhone] = useState('0px');
    const buttonRef = useRef(null);

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setTranslateXPhone('0px');
            }
        };

        if (translateXPhone !== '0px') {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [translateXPhone]);

    const handleClick = (e) => {
        if (!isLargeScreen) {
            if (translateXPhone === '0px') {
                e.preventDefault();
                setTranslateXPhone($translateXPhone);
            } else {
                window.open(href, '_blank');
            }
        } else {
            window.open(href, '_blank');
        }
    };

    return (
        <ButtonContainer
            ref={buttonRef}
            href={translateXPhone !== '0px' ? href : undefined}
            target="_blank"
            rel="noopener noreferrer"
            $bottom={$bottom}
            $bottomPhone={$bottomPhone}
            $color={$color}
            $translateX={isLargeScreen ? $translateX : '0px'}
            $translateXPhone={translateXPhone}
            onClick={handleClick}
        >
            <StyledIcon src={icon} />
            {text}
        </ButtonContainer>
    );
};