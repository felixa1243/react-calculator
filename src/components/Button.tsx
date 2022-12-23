import React from "react";
import '../assets/css/button.css'

type Props = {
    className: string,
    onClick: React.MouseEventHandler,
    value: string | number
}
export const Button: React.FunctionComponent<Props> = ({className, value, onClick}) => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )
}