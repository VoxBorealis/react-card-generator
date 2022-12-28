import React from "react";
import { CardProps } from "../types";

  
const Card = ({ rank, suit }: CardProps) => {

    return (
        <div className='Card'>
            <div className="Card-rank">{rank}</div>
            <div className="Card-suit">{suit}</div>
        </div>
    )
}

export default Card