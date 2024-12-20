import { useState, useEffect } from 'react';
import { ButtonWrapper, ButtonBar, StyledButton } from './styled';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ButtonBar $isVisible={isVisible}>
            <ButtonWrapper $isVisible={isVisible}>
                <StyledButton $isVisible={isVisible} onClick={scrollToTop}>
                    scroll to the top
                </StyledButton>
            </ButtonWrapper>
        </ButtonBar>
    );
};