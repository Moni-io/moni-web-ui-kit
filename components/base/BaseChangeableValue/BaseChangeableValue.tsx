import React, { FC, PropsWithChildren, useMemo } from 'react';
import cn from 'classnames';

import c from './baseChangeableValue.module.scss';

interface IProps extends PropsWithChildren {
    value: number;
    className?: string;
}

const BaseChangeableValue: FC<IProps> = ({ value, className, children }) => {
    const isLoss = useMemo(() => value < 0, [value]);

    const isProfit = useMemo(() => value > 0, [value]);

    return (
        <span
            className={cn(className, {
                [c.loss]: isLoss,
                [c.profit]: isProfit,
                inactive: value === 0,
            })}
        >
            {children}
        </span>
    );
};

export default BaseChangeableValue;
