import {useSelector} from "react-redux";
import {selectCount} from "./counterSlice";
import React from "react";

export function CounterDisplay() {
    const count = useSelector(selectCount);

    return <h1>{count}</h1>
}
