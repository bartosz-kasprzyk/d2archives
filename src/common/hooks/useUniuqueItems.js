import { useState, useEffect } from 'react';

const useUniqueItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`https://api.allorigins.win/raw?url=https://hellforge.vercel.app/api/v2/items/uniques`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return { items, loading };
};

export default useUniqueItems;