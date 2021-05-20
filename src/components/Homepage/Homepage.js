import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import Skeleton from "../Skeleton/Skeleton";

export function Homepage(props) {
    return (
    <div>
        <div><NavBar /></div>
        <div><Skeleton/></div>
    </div>
    )
}
