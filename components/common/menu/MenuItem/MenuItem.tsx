import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

import c from './menuItem.module.scss';

interface IProps extends PropsWithChildren {
    className?: string;
    htmlAttrs?: HTMLAttributes<HTMLDivElement>;
}

const MenuItem: FC<IProps> = ({ children, className, htmlAttrs }) => {
    return (
        <div className={cn(c.container, className)} {...htmlAttrs}>
            {children}
        </div>
    );
};

export default MenuItem;
