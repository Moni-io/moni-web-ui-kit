import React, { useMemo } from 'react';
import cn from 'classnames';
import c from './baseUiKitIcon.module.scss';
const BaseUiKitIcon = ({ name, width, height, currentColor, className, }) => {
    const Icon = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    () => require(`../../../assets/icons/${name}.svg`).default, [name]);
    return (React.createElement(Icon, { style: { fill: currentColor ? 'currentColor' : undefined }, className: cn(c.container, className), width: width, height: height }));
};
export default BaseUiKitIcon;
