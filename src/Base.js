import React from "react";
import Hey from "./Hey";
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const Base = () => (
    <div style={styles}>
        <Hey name="Base" />
        <h2>The Great and Powerful OZ!! don't look behind the curtain {"\u2728"}</h2>
    </div>
);

export default Base;