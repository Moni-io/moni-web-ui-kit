import React, {
    CSSProperties,
    FC,
    MouseEvent,
    PropsWithChildren,
    useCallback,
} from 'react';
import cn from 'classnames';

import c from './baseButton.module.scss';

interface IProps extends PropsWithChildren {
    loading?: boolean;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    onClick?: () => void | Promise<void>;
    capture?: string;
    className?: string;
    style?: CSSProperties;
    stopPropagation?: boolean;
    preventDefault?: boolean;
}

const BaseButton: FC<IProps> = ({
    loading,
    type = 'button',
    disabled,
    onClick,
    capture,
    children,
    className,
    stopPropagation,
    style,
    preventDefault,
}) => {
    const handleClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            if (stopPropagation) {
                e.stopPropagation();
            }

            if (preventDefault) {
                e.preventDefault();
            }

            if (loading || !onClick) {
                return;
            }

            void onClick();
        },
        [loading, onClick, preventDefault, stopPropagation],
    );

    return (
        <button
            type={type}
            onClick={capture ? undefined : handleClick}
            onClickCapture={capture ? handleClick : undefined}
            className={cn(c.container, className)}
            style={style}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default BaseButton;
