import { MutableRefObject, useEffect } from 'react';

export const useClickOutside = (
    refs: MutableRefObject<HTMLElement | null>[],
    handler: () => void,
    isActive = true,
): void => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!isActive) {
                return;
            }

            const isOutside = refs.every(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                (ref) => !ref.current?.contains(event.target),
            );

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
