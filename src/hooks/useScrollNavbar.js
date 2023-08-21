import { useCallback, useEffect, useRef } from "react";

export const useScrollNavbar = () => {
    const dom = useRef();

    const handleScroll = useCallback(
        ([entry]) => {
            const {current} = dom;

            if(entry.isIntersecting){
                current.style.transitionProperty = 'background-color';
                current.style.transitionDuration = '0.2s';
                current.style.transitionTimingFunction = 'linear';
                current.style.transitionDelay = '0s';
                current.style.opacity = 1;
                current.style.transform = 'translate3d(0, 0, 0)';
            }
        }, []);

    useEffect(()=>{
        let observer;
        const {current} = dom;

        if(current) {
            observer = new IntersectionObserver(handleScroll, {threshold: 0.5});
            observer.observe(current);

            return () => observer && observer.disconnect();
        }
    }, [handleScroll]);

    return {
        ref: dom,
    };
};