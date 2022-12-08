import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import { OrderDirectionType } from '../../../types';

import {
    QuestionMark20x20Icon,
    SortTitleArrow11x20Icon,
} from '../../../assets';
import { BaseButton } from '../../base/BaseButton';
import { BaseTooltip } from '../../base/BaseTooltip';

import c from './sortIndicator.module.scss';

interface IProps {
    value: OrderDirectionType | undefined;
    name: string | JSX.Element;
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
                <SortTitleArrow11x20Icon
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
                    <QuestionMark20x20Icon width={18} />
                </BaseTooltip>
            )}
        </BaseButton>
    );
};

export default SortIndicator;
