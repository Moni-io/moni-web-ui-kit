import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const LOAD_MORE_SCROLL_OFFSET = 1000;

export const useLoadMoreOnScroll = (
    scrollContainerId: string,
    loadMore: () => Promise<void> | void,
    disabled = false,
): void => {
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        const scrollContainer = document.getElementById(
            scrollContainerId,
        ) as HTMLDivElement;

        const onScroll = throttle(async () => {
            if (
                !isLoadingMore &&
                !disabled &&
                scrollContainer.scrollHeight - LOAD_MORE_SCROLL_OFFSET <
                    scrollContainer.scrollTop + scrollContainer.offsetHeight
            ) {
                setIsLoadingMore(true);

                await loadMore();

                setIsLoadingMore(false);
            }
        }, 300);

        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        scrollContainer?.addEventListener('scroll', onScroll);

        return () => {
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            scrollContainer?.removeEventListener('scroll', onScroll);
        };
    }, [disabled, isLoadingMore, loadMore]);
};
