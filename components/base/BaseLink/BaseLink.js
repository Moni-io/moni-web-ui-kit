import React from 'react';
import Link from 'next/link';
const BaseLink = ({ href, target = '_self', stopPropagation, className, children, }) => {
    return (React.createElement(Link, { href: href, passHref: true },
        React.createElement("a", { target: target, className: className, onClick: (e) => (stopPropagation ? e.stopPropagation() : null) }, children)));
};
export default BaseLink;
