import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import c from './placeLayout.module.scss';

interface IProps extends PropsWithChildren {
    style?: CSSProperties;
    className?: string;
}

const PlaceLayout: FC<IProps> = ({ style, children, className }) => {
    return (
        <article style={style} className={cn(c.container, className)}>
            {children}
        </article>
    );
};

export default PlaceLayout;
