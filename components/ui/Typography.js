import React from 'react'
const variants = {
    h1: {component: "h1", style:"text-3xl font-bold lg:text-4xl"},
    h2: {component: "h2", style:"text-3xl font-bold"},
    h3: {component: "h3", style:"text-2xl font-bold"},
    h4: {component: "h4", style:"text-xl font-bold"},
    h5: {component: "h5", style:"text-base font-bold"},
    h6: {component: "h6", style:"text-sm font-bold lg:text-lg"},
    subtitle: {component: "span", style:"text-xs text-gozatgray-500 lg:text-sm"},
    xxs: {component: "span", style:"text-xxs text-gozatgray-500 lg:text-xs"},
    follow: {component: "span", style:"text-xs text-gozatblue-400 font-medium lg:text-sm"},
    followActive: {component: "span", style:"text-xs text-white font-medium lg:text-sm"},
    followBig: {component: "span", style:"text-sm text-gozatblue-400 font-medium lg:text-base"},
    followActiveBig: {component: "span", style:"text-sm text-white font-medium lg:text-base"},
    smallbold: {component: "b", style:"text-xs font-bold"},
    text: {component: "p", style:"text-sm leading-snug lg:text-base"},
    textSm: {component: "p", style:"text-xs leading-snug lg:text-sm"},

};

export default function Typography({ variant = 'body1', children, className, style }) {
    const Component = variant ? variants[variant].component : "p"

    return (
        <Component style={style} className={`${variants[variant].style} ${className && className}  `}>{children}</Component>
    )
}