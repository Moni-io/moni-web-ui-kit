import { useEffect } from 'react';
export const useClickOutside = (refs, handler, isActive = true) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isActive) {
                return;
            }
            const isOutside = refs.every(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            (ref) => { var _a; return !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)); });
            if (isOutside) {
                handler();
            }
        };
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('dragstart', handleClickOutside);
        });
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('dragstart', handleClickOutside);
        };
    }, [handler, isActive, refs]);
};
