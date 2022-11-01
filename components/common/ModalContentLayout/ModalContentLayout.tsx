import React, { FC, PropsWithChildren } from 'react';

import c from './modalContentLayout.module.scss';

interface IProps extends PropsWithChildren {
    onClose?: () => void;
}

const ModalContentLayout: FC<IProps> = ({ onClose, children }) => {
    return (
        <div className={c.container}>
            {onClose && (
                <button className={c.closeContainer} onClick={onClose}>
                    <svg
                        width={7}
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.390918 0.394335C0.0910489 0.694204 0.0910478 1.18039 0.390917 1.48026L2.91145 4.00079L0.390925 6.52131C0.0910555 6.82118 0.0910566 7.30736 0.390926 7.60723C0.690795 7.9071 1.17698 7.9071 1.47685 7.60723L3.99737 5.08671L6.51789 7.60723C6.81776 7.9071 7.30395 7.9071 7.60382 7.60723C7.90369 7.30736 7.90369 6.82118 7.60382 6.52131L5.08329 4.00079L7.60382 1.48026C7.90369 1.18039 7.90369 0.694204 7.60382 0.394335C7.30395 0.0944664 6.81777 0.0944663 6.5179 0.394335L3.99737 2.91487L1.47684 0.394335C1.17697 0.0944663 0.690787 0.0944664 0.390918 0.394335Z"
                        />
                    </svg>
                </button>
            )}
            {children}
        </div>
    );
};

export default ModalContentLayout;
