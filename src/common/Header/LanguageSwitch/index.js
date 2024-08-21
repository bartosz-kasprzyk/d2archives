import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import plFlag from '../../../images/pl.svg';
import engFlag from '../../../images/eng.svg';

const LanguageSwitch = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentLang, setCurrentLang] = useState(new URLSearchParams(location.search).get('lang'));

    const setLanguage = (lang) => {
        setCurrentLang(lang);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (currentLang && searchParams.get('lang') !== currentLang) {
            searchParams.set('lang', currentLang);
            const newUrl = `${location.pathname}${location.hash}?${searchParams.toString()}`;
            navigate(newUrl, { replace: true });
        }
    }, [currentLang, location, navigate]);

    return (
        <div>
            <button onClick={() => setLanguage('pl')}>
                <img src={plFlag} alt="Polski" style={{ width: '24px', height: '15px' }} />
            </button>
            <button onClick={() => setLanguage('eng')}>
                <img src={engFlag} alt="English" style={{ width: '24px', height: '15px' }} />
            </button>
        </div>
    );
};

export default LanguageSwitch;