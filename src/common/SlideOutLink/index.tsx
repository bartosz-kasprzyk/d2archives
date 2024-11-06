import { useEffect, useRef, useState } from 'react';
import { ButtonContainer, StyledIcon } from './styled';
import { useScreenWidth } from '../hooks/useScreenWidth';

interface SlideOutLinkProps {
    icon: string,
    text: string,
    href?: string,
    onClick?: () => void,
    $bottom: string,
    $bottomPhone: string,
    $color: string,
    $translateX: string,
    $translateXPhone: string
}

export const SlideOutLink = ({ icon, text, href, onClick, $bottom, $bottomPhone, $color, $translateX, $translateXPhone }: SlideOutLinkProps) => {
    const [slideOutPosition, setSlideOutPosition] = useState('0px');
    const buttonRef = useRef<HTMLAnchorElement | null>(null);

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const isHoverableDevice = () => {
        return window.matchMedia('(hover: hover)').matches;
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                setSlideOutPosition('0px');
            }
        };

        if (slideOutPosition !== '0px') {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [slideOutPosition]);

    const handleClick = (e: React.MouseEvent) => {
        if (onClick && !isHoverableDevice()) {
            e.preventDefault();
            if (slideOutPosition === '0px') {
                setSlideOutPosition($translateXPhone);
            } else {
                onClick();
                setSlideOutPosition('0px');
            }
            return;
        }

        if (onClick && isHoverableDevice()) {
            onClick();
            return;
        }

        if (e.button === 1) {
            window.open(href, '_blank');
            return;
        }

        if (!isHoverableDevice()) {
            if (slideOutPosition === '0px') {
                e.preventDefault();
                setTimeout(() => {
                    setSlideOutPosition($translateXPhone);
                }, 100);
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
            href={!onClick && slideOutPosition !== '0px' ? href : undefined}
            target={href && "_blank"}
            rel={href && "noopener noreferrer"}
            $bottom={$bottom}
            $bottomPhone={$bottomPhone}
            $color={$color}
            $translateX={isLargeScreen ? $translateX : slideOutPosition}
            onMouseDown={handleClick}
        >
            <StyledIcon src={icon} />
            {text}
        </ButtonContainer>
    );
};