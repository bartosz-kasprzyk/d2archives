import { useEffect, useRef, useState } from 'react';
import { ButtonContainer, StyledIcon } from './styled';
import { useScreenWidth } from '../hooks/useScreenWidth';

interface SlideOutLinkProps {
    icon: string,
    text: string,
    href: string,
    $bottom: string,
    $bottomPhone: string,
    $color: string,
    $translateX: string,
    $translateXPhone: string
}

export const SlideOutLink = ({ icon, text, href, $bottom, $bottomPhone, $color, $translateX, $translateXPhone }: SlideOutLinkProps) => {
    const [translateXPhone, setTranslateXPhone] = useState('0px');
    const buttonRef = useRef<HTMLAnchorElement | null>(null);

    const screenWidth = useScreenWidth();

    const isHoverableDevice = () => {
        const hoverSupport = window.matchMedia('(hover: hover)').matches;
        return hoverSupport && screenWidth > 767;
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
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

    const handleClick = (e: React.MouseEvent) => {
        if (!isHoverableDevice()) {
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
            $translateX={isHoverableDevice() ? $translateX : translateXPhone}
            onClick={handleClick}
        >
            <StyledIcon src={icon} />
            {text}
        </ButtonContainer>
    );
};