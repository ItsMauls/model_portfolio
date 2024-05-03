import { useEffect, useRef, useState } from "react";

const useVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef<HTMLInputElement>(null);

    const checkVisibility = () => {
        if (!headingRef.current) {
            return;
        }
        const rect = headingRef?.current?.getBoundingClientRect()

        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check on component mount
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return {
        isVisible,
        headingRef
    }
}

export default useVisibility