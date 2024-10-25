import { useEffect, useState } from 'react';
import { DataType, RuneAndRunewordData, UniqueAndSetData } from '../../types';

interface State<T> {
    status: 'loading' | 'success' | 'error';
    content: T | null;
}

const useLoadContent = (dataType: DataType) => {
    const [state, setState] = useState<State<RuneAndRunewordData | UniqueAndSetData>>({
        status: 'loading',
        content: null
    });

    useEffect(() => {
        const loadContent = async () => {
            if (!dataType) {
                return;
            }

            try {
                let contentModule: { default: RuneAndRunewordData | UniqueAndSetData };

                if (dataType === 'runeAndRuneword') {
                    contentModule = await import('../config/runeAndRunewordData.json') as { default: RuneAndRunewordData };
                } else if (dataType === 'uniqueAndSet') {
                    contentModule = await import('../config/uniqueAndSetData.json') as { default: UniqueAndSetData };
                } else {
                    throw new Error('Invalid data type');
                }

                setTimeout(() => {
                    setState({
                        status: 'success',
                        content: contentModule.default
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