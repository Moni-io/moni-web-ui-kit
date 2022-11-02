import React, { useRef } from 'react';
import cn from 'classnames';
import { useClickOutside } from '../../../hooks';
import c from './baseModal.module.scss';
const BaseModal = ({ children, onClose, alignTop, centerContent = true, }) => {
    const contentRef = useRef(null);
    useClickOutside([contentRef], () => onClose && onClose());
    return (React.createElement("div", { className: c.container },
        React.createElement("div", { ref: contentRef, className: cn(c.contentContainer, {
                [c.centered]: centerContent,
                [c.alignTop]: alignTop,
            }) }, children)));
};
export default BaseModal;
