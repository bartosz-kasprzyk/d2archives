import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLoadContent = () => {
    const location = useLocation();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lang = searchParams.get('lang') || 'en';

        const loadContent = async () => {
            try {
                let contentModule;
                if (lang === 'pl') {
                    contentModule = await import('../translations/pl.json');
                } else {
                    contentModule = await import('../translations/en.json');
                }
                setContent(contentModule);
            } catch (error) {
                console.error('Error loading language file:', error);
            }
        };

        loadContent();
    }, [location.search]);

    return content;
};

export default useLoadContent;