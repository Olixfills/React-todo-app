import { useState, useEffect } from "react";



const useLocalStorage = (key, initVal) => {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(initVal))
        } catch (error) {
            val = initVal
        }
        return val;
    });

    useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(state));
}, [state]);
    
    return [state, setState];
}

export default useLocalStorage;
