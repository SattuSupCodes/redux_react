import { useEffect, useState } from "react";
import React from "react";
const EffectComponent = () =>{
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("I am mounting...")
    }, [count]); //dependency on count

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count + 1) }>Update</button>
        </div>
    )
}

export default EffectComponent;
// something gets triggered and as a side-effect something happens

// this is use-effect functionhh
