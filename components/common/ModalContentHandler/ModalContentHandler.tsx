import React, { FC } from 'react';

import { IModalConfig } from '../../../utils/presenters';
import { BaseModal } from '../../base/BaseModal';
import { ModalContentLayout } from '../ModalContentLayout';

type ContentType = string | number;

interface IProps {
    contentMap: Record<ContentType, React.ElementType>;
    config: IModalConfig;
    content: ContentType | null;
    payload: Record<string, any> | null | undefined;
    onClose: () => void;
}

const ModalContentHandler: FC<IProps> = ({
    config,
    content,
    payload,
    onClose,
    contentMap,
}) => {
    const Content = content ? contentMap[content] : null;

    return (
        <BaseModal
            onClose={config.closeOnclickOutside ? onClose : undefined}
            alignTop={config.alignTop}
        >
            <ModalContentLayout onClose={config.cross ? onClose : undefined}>
                {Content && payload !== null && (
                    <Content payload={payload} onClose={onClose} />
                )}
            </ModalContentLayout>
        </BaseModal>
    );
};

export default ModalContentHandler;
