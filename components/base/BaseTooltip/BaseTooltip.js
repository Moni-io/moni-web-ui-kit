import React from 'react';
import cn from 'classnames';
import c from './baseTooltip.module.scss';
const BaseTooltip = ({ children, text, position = 'top', hover, tooltipClassName, containerClassName, }) => {
    return (React.createElement("div", { className: cn(c.container, { [c.hover]: hover }, containerClassName) },
        React.createElement("div", { className: cn(c.tooltipContainer, c[position], {
                [c.tooltipHidden]: !text,
            }) },
            React.createElement("div", { className: cn(c.tooltip, tooltipClassName) },
                React.createElement("span", { className: cn('footnoteFont', c.text) }, text))),
        React.createElement("div", null, children)));
};
export default BaseTooltip;
