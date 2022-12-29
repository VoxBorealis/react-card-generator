import React from "react";
import './Card.css'

import { CardProps } from "../types";

  
const Card = ({ rank, suit }: CardProps) => {
    return (
        <div className='Card'>
            <div className="Card-rank" style={{ color: suit === '♠️' || suit === '♣️' ? '#282c34' : 'rgb(187, 72, 72)'}}>{rank}</div>
            <div className="Card-suit">{suit}</div>
        </div>
    )
}

export default Card