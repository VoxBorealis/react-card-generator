import React from "react";
import { ButtonProps } from "../types";

const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <div>
            <button onClick={onClick} className={"Button"}>
                {children}
            </button>
        </div>
    )
}

export default Button