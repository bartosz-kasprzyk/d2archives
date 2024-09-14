import React, { useState, useEffect } from 'react';
import d2Loading1 from '../../images/D2Loading/d2Loading1.jpg';
import d2Loading2 from '../../images/D2Loading/d2Loading2.jpg';
import d2Loading3 from '../../images/D2Loading/d2Loading3.jpg';
import d2Loading4 from '../../images/D2Loading/d2Loading4.jpg';
import { LoadingWrapper, StyledLoading } from './styled';
import useLoadContent from '../hooks/useLoadContent';

const images = [d2Loading1, d2Loading2, d2Loading3, d2Loading4];

export const Loading = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const state = useLoadContent();

    useEffect(() => {
        if (state.status !== 'loading') {
            return;
        }

        let index = 0;
        const interval = setInterval(() => {
            setCurrentImage(images[index]);
            index++;
        }, 200);

        return () => clearInterval(interval);
    }, [state.status]);

    return (
        <LoadingWrapper>
            <StyledLoading src={currentImage} alt="Loading" />
        </LoadingWrapper>
    );
};