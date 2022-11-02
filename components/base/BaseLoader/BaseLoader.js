import React from 'react';
import cn from 'classnames';
import c from './baseLoader.module.scss';
const BaseLoader = ({ size = 24, className }) => {
    return (React.createElement("svg", { width: size, height: size, className: cn(c.loader, className), viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 9.38356 18.938 8.7816 18.82 8.2C18.569 6.96364 18.0646 5.81931 17.3633 4.82361", stroke: "url(#paint0_linear_7073_15610)", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_7073_15610", x1: "13.15", y1: "3.7", x2: "18.55", y2: "1.45", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#6C41EB" }),
                React.createElement("stop", { offset: "1", stopColor: "#6C41EB", stopOpacity: "0" })))));
};
export default BaseLoader;
