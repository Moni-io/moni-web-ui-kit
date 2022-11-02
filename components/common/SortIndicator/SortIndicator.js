import React, { useCallback } from 'react';
import cn from 'classnames';
import { OrderDirectionType } from '../../../types';
import { BaseButton } from '../../base/BaseButton';
import { BaseTooltip } from '../../base/BaseTooltip';
import { BaseUiKitIcon } from '../../base/BaseUiKitIcon';
import c from './sortIndicator.module.scss';
const SortIndicator = ({ name, value, selected, disabled, tooltipText, onSortChange, }) => {
    const onSortClick = useCallback(() => {
        if (value === OrderDirectionType.Desc) {
            onSortChange(OrderDirectionType.Asc);
        }
        else {
            onSortChange(OrderDirectionType.Desc);
        }
    }, [onSortChange, value]);
    return (React.createElement(BaseButton, { disabled: disabled, onClick: onSortClick, className: cn('footnoteFont', 'semiBoldWeight', c.container, {
            [c.selected]: selected && !disabled,
        }) },
        !disabled && value !== undefined && (React.createElement(BaseUiKitIcon, { name: 'sortTitleArrow11x20', width: 11, className: value === OrderDirectionType.Asc
                ? c.arrowUp
                : c.arrowDown })),
        React.createElement("span", null, name),
        tooltipText && (React.createElement(BaseTooltip, { text: tooltipText, hover: true, containerClassName: c.tooltipContainer, tooltipClassName: c.tooltip },
            React.createElement(BaseUiKitIcon, { name: 'questionMark', width: 18 })))));
};
export default SortIndicator;
