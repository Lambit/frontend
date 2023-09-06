import { useEffect, useState } from "react";

 const useActive = (color) => {
    const [on, setOn] = useState('warning');

    useEffect(() => {
        color.addEventListener('click', () => {
            setOn('secondary');
        });
        color.addEventListener('click', () => {
            setOn('warning');
        });
    }, [color]);

    return on;
 };

 export default useActive;