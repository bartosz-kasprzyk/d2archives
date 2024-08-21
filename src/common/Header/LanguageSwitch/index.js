import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import plFlag from '../../../images/pl.svg';
import engFlag from '../../../images/eng.svg';
import { ButtonSection, StyledButton } from './styled';

const LanguageSwitch = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentLang, setCurrentLang] = useState(() => new URLSearchParams(location.search).get('lang') || 'eng');

    const setLanguage = (lang) => {
        setCurrentLang(lang);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lang = searchParams.get('lang');

        if (currentLang !== lang) {
            searchParams.set('lang', currentLang);
            const newUrl = `${location.pathname}?${searchParams.toString()}`;
            navigate(newUrl, { replace: true });
        }
    }, [currentLang, location, navigate]);

    return (
        <ButtonSection>
            <StyledButton onClick={() => setLanguage('pl')} $flag={plFlag} />
            <StyledButton onClick={() => setLanguage('eng')} $flag={engFlag} />
        </ButtonSection>
    );
};

export default LanguageSwitch;