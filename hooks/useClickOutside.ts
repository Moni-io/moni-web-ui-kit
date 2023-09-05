import { MutableRefObject, useEffect, useRef } from 'react';

export const useClickOutside = (
    refs: MutableRefObject<HTMLElement | null>[],
    handler: () => void,
): void => {
    const handleClickOutside = useRef((event: any) => {
        const isOutside = refs.every(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            (ref) => !ref.current?.contains(event.target),
        );

        if (isOutside) {
            handler();
        }
    });

    useEffect(() => {
        const func = handleClickOutside.current;

        setTimeout(() => {
            document.addEventListener('click', func);
            document.addEventListener('dragstart', func);
        });

        return () => {
            document.removeEventListener('click', func);
            document.removeEventListener('dragstart', func);
        };
    }, [handler, refs]);
};
