import React, { useState, useEffect } from 'react';
import d2Loading1 from '../../images/D2Loading/d2Loading1.jpg';
import d2Loading2 from '../../images/D2Loading/d2Loading2.jpg';
import d2Loading3 from '../../images/D2Loading/d2Loading3.jpg';
import d2Loading4 from '../../images/D2Loading/d2Loading4.jpg';
import { LoadingWrapper, StyledLoading } from './styled';
import useLoadContent from '../hooks/useLoadContent';
import { DataType } from '../../types';

const images = [d2Loading1, d2Loading2, d2Loading3, d2Loading4];

export const Loading = ({ dataType }: { dataType: DataType }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const state = useLoadContent(dataType);

    useEffect(() => {
        if (state.status !== 'loading') {
            setCurrentImage(images[images.length - 1]);
            return;
        }

        let index = 0;
        const interval = setInterval(() => {
            if (index < images.length) {
                setCurrentImage(images[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [state.status]);

    return (
        <LoadingWrapper>
            <StyledLoading src={currentImage} alt="Loading" />
        </LoadingWrapper>
    );
};