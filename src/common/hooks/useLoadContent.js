import { useEffect, useState } from 'react';

const useLoadContent = (dataType) => {
    const [state, setState] = useState({
        status: 'loading',
        content: null
    });

    useEffect(() => {
        const loadContent = async () => {
            if (!dataType) {
                return;
            }

            try {
                let contentModule;

                if (dataType === 'runeAndRuneword') {
                    contentModule = await import('../config/runeAndRunewordData.json');
                } else if (dataType === 'uniqueAndSet') {
                    contentModule = await import('../config/uniqueAndSetData.json');
                } else {
                    throw new Error('Invalid data type');
                }

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
    }, [dataType]);

    return state;
};

export default useLoadContent;