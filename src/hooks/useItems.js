import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://ac-stock-house-server.onrender.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems]
}

export default useItems;