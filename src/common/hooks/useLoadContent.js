import { useEffect, useState } from 'react';

const useLoadContent = () => {
    const [state, setState] = useState({
        status: 'loading',
        content: null
    });

    useEffect(() => {
        const loadContent = async () => {
            try {
                const contentModule = await import('../config/data.json');

                setTimeout(() => {
                    setState({
                        status: 'success',
                        content: contentModule
                    });
                }, 800);

            } catch (error) {
                console.error('Error loading content:', error);
                setState({
                    status: 'error',
                    content: null
                });
            }
        };

        loadContent();
    }, []);

    return state;
};

export default useLoadContent;