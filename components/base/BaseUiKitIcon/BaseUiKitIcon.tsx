import React, { FC, useMemo } from 'react';
import cn from 'classnames';

import c from './baseUiKitIcon.module.scss';

type BaseUiKitIconName = 'sortTitleArrow11x20' | 'questionMark';

interface IProps {
    name: BaseUiKitIconName;
    width?: number;
    height?: number;
    currentColor?: boolean;
    className?: string;
}

const BaseUiKitIcon: FC<IProps> = ({
    name,
    width,
    height,
    currentColor,
    className,
}) => {
    const Icon = useMemo(
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        () => require(`../../../assets/icons/${name}.svg`).default,
        [name],
    );

    return (
        <Icon
            style={{ fill: currentColor ? 'currentColor' : undefined }}
            className={cn(c.container, className)}
            width={width}
            height={height}
        />
    );
};

export default BaseUiKitIcon;
