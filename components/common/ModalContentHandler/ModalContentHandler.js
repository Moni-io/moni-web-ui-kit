import React from 'react';
import { BaseModal } from '../../base/BaseModal';
import { ModalContentLayout } from '../ModalContentLayout';
const ModalContentHandler = ({ config, content, payload, onClose, contentMap, }) => {
    const Content = content ? contentMap[content] : null;
    return (React.createElement(BaseModal, { onClose: config.closeOnclickOutside ? onClose : undefined, alignTop: config.alignTop },
        React.createElement(ModalContentLayout, { onClose: config.cross ? onClose : undefined }, Content && payload !== null && (React.createElement(Content, { payload: payload, onClose: onClose })))));
};
export default ModalContentHandler;
