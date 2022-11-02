import React from 'react';
import cn from 'classnames';
import c from './placeLayout.module.scss';
const PlaceLayout = ({ style, children, className }) => {
    return (React.createElement("article", { style: style, className: cn(c.container, className) }, children));
};
export default PlaceLayout;
