import React, { FC, PropsWithChildren, useRef } from 'react';
import cn from 'classnames';

import { useClickOutside } from '../../../hooks';

import c from './baseModal.module.scss';

interface IProps extends PropsWithChildren {
    onClose?: () => void;
    centerContent?: boolean;
    alignTop?: boolean;
}

const BaseModal: FC<IProps> = ({
    children,
    onClose,
    alignTop,
    centerContent = true,
}) => {
    const contentRef = useRef(null);

    useClickOutside([contentRef], () => onClose && onClose());

    return (
        <div className={c.container}>
            <div
                ref={contentRef}
                className={cn(c.contentContainer, {
                    [c.centered]: centerContent,
                    [c.alignTop]: alignTop,
                })}
            >
                {children}
            </div>
        </div>
    );
};

export default BaseModal;
