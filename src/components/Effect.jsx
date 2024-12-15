import { useEffect, useState } from "react";
import React from "react";
const EffectComponent = () =>{
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("I am mounting...")
    }, []);
}

export default EffectComponent;