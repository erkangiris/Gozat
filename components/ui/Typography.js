import React from 'react'
const variants = {
    h1: {component: "h1", style:"text-4xl font-bold"},
    h2: {component: "h2", style:"text-3xl font-bold"},
    h3: {component: "h3", style:"text-2xl font-bold"},
    h4: {component: "h4", style:"text-xl font-bold"},
    h5: {component: "h5", style:"text-base font-bold"},
    h6: {component: "h6", style:"text-sm font-bold"},
    subtitle: {component: "span", style:"text-xs text-gozatgray-500"},
    xxs: {component: "span", style:"text-xxs text-gozatgray-500"},
    follow: {component: "span", style:"text-xs text-gozatblue-400 font-medium"},
    followActive: {component: "span", style:"text-xs text-white font-medium"},
    smallbold: {component: "b", style:"text-xs font-bold"},
    // body1: {component: "p", style:"text-lg leading-7"},
    // body2: {component: "span", style:"text-sm"},
    // small: {component: "span", style:"text-xs"},
    // bold: {component: "span", style:"text-base font-bold"},
    // smallbold: {component: "span", style:"text-xs font-bold"},
    // strong: {component: "strong", style:"text-base"},
    // strong2xl: {component: "strong", style:"text-2xl font-bold lg:text-lg"},
    // strong3xl: {component: "strong", style:"text-3xl font-bold lg:text-lg"},
    // strong4xl: {component: "strong", style:"text-4xl font-semibold"},
    // strongxl: {component: "strong", style:"text-xl font-semibold"},
    // lgbold: {component: "strong", style:"text-lg"},
    // xxs:{component: "span", style:"text-xxs"},
    // default:{component: "p", style:"text-base"},
    // green_badge:{component:'mark', style:"text-xxs whitespace-nowrap bg-green-100 rounded text-green-600 font-bold px-3 py-1 max-w-fit max-h-fit"},
    // white_badge:{component:'mark', style:"text-xxs whitespace-nowrap bg-white rounded text-black font-bold px-3 py-1 h-5"},
    // xl5: {component: "span", style:"text-5xl font-bold leading-tight"},
    // xl2: {component: "span", style:"text-2xl"},
    // tag: {component: "span", style:"bg-gray-100  hover:bg-gray-100 font-semibold  text-xxs px-4 py-1 rounded-md flex items-center justify-center h-7"},

};

export default function Typography({ variant = 'body1', children, className, style }) {
    const Component = variant ? variants[variant].component : "p"

    return (
        <Component style={style} className={`${variants[variant].style} ${className && className}  `}>{children}</Component>
    )
}