import React from "react";

export interface CardProps {
    rank: string;
    suit: string;
}

export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}
