import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLoadContent = () => {
    const location = useLocation();
    const [state, setState] = useState({
        status: 'loading',
        content: null
    });

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

                setTimeout(() => {
                    setState({
                        status: 'success',
                        content: contentModule
                    });
                }, 800);

            } catch (error) {
                console.error('Error loading language file:', error);
                setState({
                    status: 'error',
                    content: null
                });
            }
        };

        loadContent();
    }, [location.search]);

    return state;
};

export default useLoadContent;