import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import c from './baseTooltip.module.scss';

interface IProps extends PropsWithChildren {
    text: string | JSX.Element;
    hover?: boolean;
    position?: 'top' | 'bottom';
    tooltipClassName?: string;
    containerClassName?: string;
}

const BaseTooltip: FC<IProps> = ({
    children,
    text,
    position = 'top',
    hover,
    tooltipClassName,
    containerClassName,
}) => {
    return (
        <div
            className={cn(
                c.container,
                { [c.hover]: hover },
                containerClassName,
            )}
        >
            <div
                className={cn(c.tooltipContainer, c[position], {
                    [c.tooltipHidden]: !text,
                })}
            >
                <div className={cn(c.tooltip, tooltipClassName)}>
                    <span className={cn('footnoteFont', c.text)}>{text}</span>
                </div>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default BaseTooltip;
