import { useEffect, useState } from "react";
import React from "react";
const EffectComponent = () =>{
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("I am mounting...")
    }, []);

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count + 1) }>Update</button>
        </div>
    )
}

export default EffectComponent;