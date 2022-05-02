import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('mainItems.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems]
}

export default useItems;