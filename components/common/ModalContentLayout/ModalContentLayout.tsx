import React, { CSSProperties, FC, PropsWithChildren } from 'react';

import { Close8x8Icon } from '../../../assets';

import c from './modalContentLayout.module.scss';

interface IProps extends PropsWithChildren {
    style?: CSSProperties;
    onClose?: () => void;
}

const ModalContentLayout: FC<IProps> = ({ onClose, style, children }) => {
    return (
        <div style={style} className={c.container}>
            {onClose && (
                <button className={c.closeContainer} onClick={onClose}>
                    <Close8x8Icon width={7} />
                </button>
            )}
            {children}
        </div>
    );
};

export default ModalContentLayout;
