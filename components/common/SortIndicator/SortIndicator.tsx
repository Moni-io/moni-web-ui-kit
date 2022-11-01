import React, { FC, useCallback } from 'react';
import { BaseButton } from '@components/base/BaseButton';
import { BaseTooltip } from '@components/base/BaseTooltip';
import { BaseUiKitIcon } from '@components/base/BaseUiKitIcon';
import cn from 'classnames';

import { OrderDirectionType } from '../../../types';

import c from './sortIndicator.module.scss';

interface IProps {
    value: OrderDirectionType | undefined;
    name: string;
    onSortChange: (value: OrderDirectionType) => void;
    tooltipText?: string;
    selected?: boolean;
    disabled?: boolean;
}

const SortIndicator: FC<IProps> = ({
    name,
    value,
    selected,
    disabled,
    tooltipText,
    onSortChange,
}) => {
    const onSortClick = useCallback(() => {
        if (value === OrderDirectionType.Desc) {
            onSortChange(OrderDirectionType.Asc);
        } else {
            onSortChange(OrderDirectionType.Desc);
        }
    }, [onSortChange, value]);

    return (
        <BaseButton
            disabled={disabled}
            onClick={onSortClick}
            className={cn('footnoteFont', 'semiBoldWeight', c.container, {
                [c.selected]: selected && !disabled,
            })}
        >
            {!disabled && value !== undefined && (
                <BaseUiKitIcon
                    name={'sortTitleArrow11x20'}
                    width={11}
                    className={
                        value === OrderDirectionType.Asc
                            ? c.arrowUp
                            : c.arrowDown
                    }
                />
            )}
            <span>{name}</span>

            {tooltipText && (
                <BaseTooltip
                    text={tooltipText}
                    hover
                    containerClassName={c.tooltipContainer}
                    tooltipClassName={c.tooltip}
                >
                    <BaseUiKitIcon name={'questionMark'} width={18} />
                </BaseTooltip>
            )}
        </BaseButton>
    );
};

export default SortIndicator;
