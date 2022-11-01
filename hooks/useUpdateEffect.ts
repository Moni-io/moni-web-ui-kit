import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useUpdateEffect = (
    effect: EffectCallback,
    dependencies: DependencyList = [],
): void => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            return effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

export default useUpdateEffect;
