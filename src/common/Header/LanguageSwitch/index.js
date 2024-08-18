import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
            <button onClick={() => setLanguage('pl')}>Polski</button>
            <button onClick={() => setLanguage('eng')}>English</button>
        </div>
    );
};

export default LanguageSwitch;