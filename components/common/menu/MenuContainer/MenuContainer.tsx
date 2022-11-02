import React, { FC, PropsWithChildren, useRef } from 'react';
import cn from 'classnames';

import { useClickOutside } from '../../../../hooks';

import c from './menuContainer.module.scss';

interface IProps extends PropsWithChildren {
    onClose?: () => void;
    className?: string;
}

const MenuContainer: FC<IProps> = ({ children, className, onClose }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useClickOutside([menuRef], () => onClose && onClose());

    return (
        <div ref={menuRef} className={cn(c.container, className)}>
            {children}
        </div>
    );
};

export default MenuContainer;
