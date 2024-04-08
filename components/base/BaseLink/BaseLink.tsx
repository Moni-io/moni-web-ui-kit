import { UrlObject } from 'url';

import React, { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';
import Link from 'next/link';

interface IProps extends PropsWithChildren {
    href: string | UrlObject;
    onClick?: () => void;
    stopPropagation?: boolean;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}

const BaseLink: FC<IProps> = ({
    href,
    onClick,
    target = '_self',
    stopPropagation,
    className,
    children,
}) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <a
                target={target}
                className={className}
                onClick={(e) => {
                    stopPropagation ? e.stopPropagation() : null;
                    onClick ? onClick() : null;
                }}
            >
                {children}
            </a>
        </Link>
    );
};

export default BaseLink;
