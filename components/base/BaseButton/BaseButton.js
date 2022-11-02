import React, { useCallback, } from 'react';
import cn from 'classnames';
import c from './baseButton.module.scss';
const BaseButton = ({ loading, type = 'button', disabled, onClick, children, className, stopPropagation, style, preventDefault, }) => {
    const handleClick = useCallback((e) => {
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
    }, [loading, onClick, preventDefault, stopPropagation]);
    return (React.createElement("button", { type: type, onClick: handleClick, className: cn(c.container, className), style: style, disabled: disabled }, children));
};
export default BaseButton;
